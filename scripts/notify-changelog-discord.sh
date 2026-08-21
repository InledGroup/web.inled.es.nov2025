#!/bin/bash

# Script para publicar la última sección del changelog en Discord
# Uso: ./notify-changelog-discord.sh (requiere DISCORD_WEBHOOK_URL)

set -euo pipefail

CHANGELOG_FILE="src/data/changelog.md"

if [ -z "${DISCORD_WEBHOOK_URL:-}" ]; then
    echo "❌ DISCORD_WEBHOOK_URL no está definido"
    exit 1
fi

if [ ! -f "$CHANGELOG_FILE" ]; then
    echo "❌ No se encontró $CHANGELOG_FILE"
    exit 1
fi

DATE=$(grep -m1 -oP '^## \K\d{4}-\d{2}-\d{2}' "$CHANGELOG_FILE" || true)

if [ -z "$DATE" ]; then
    echo "❌ No hay ninguna sección con fecha (## YYYY-MM-DD) en el changelog"
    exit 1
fi

# Contenido completo de la primera sección (la más reciente)
BODY=$(awk '/^## [0-9]{4}-[0-9]{2}-[0-9]{2}/ { if (++s > 1) exit; next } s == 1' "$CHANGELOG_FILE" \
    | sed '/./,$!d')

if [ -z "$BODY" ]; then
    echo "⚠️ La sección $DATE está vacía. No se envía nada."
    exit 0
fi

# Fecha legible en inglés: "Sunday, August 9, 2026"
declare -a MONTHS=(January February March April May June July August September October November December)
declare -a WEEKDAYS=(Monday Tuesday Wednesday Thursday Friday Saturday Sunday)
YEAR="${DATE:0:4}"
MONTH=$((10#${DATE:5:2}))
DAY=$((10#${DATE:8:2}))
WEEKDAY=$(date -d "$DATE" +%u)
PRETTY_DATE="${WEEKDAYS[$WEEKDAY-1]}, ${MONTHS[$MONTH-1]} $DAY, $YEAR"

# Divide el contenido en trozos que caben en un embed de Discord,
# respetando los saltos de línea para no romper el markdown
CHUNK_MAX=1800
CHUNKS=()
build_chunks() {
    local current="" line
    while IFS= read -r line || [ -n "$line" ]; do
        while [ ${#line} -gt $CHUNK_MAX ]; do
            [ -n "$current" ] && { CHUNKS+=("$current"); current=""; }
            CHUNKS+=("${line:0:$CHUNK_MAX}")
            line="${line:$CHUNK_MAX}"
        done
        if [ -n "$current" ]; then
            if [ $(( ${#current} + ${#line} + 1 )) -gt $CHUNK_MAX ]; then
                CHUNKS+=("$current")
                current="$line"
            else
                current+=$'\n'"$line"
            fi
        else
            current="$line"
        fi
    done <<< "$BODY"
    [ -n "$current" ] && CHUNKS+=("$current")
}
build_chunks

echo "🔔 Publicando changelog de $PRETTY_DATE en Discord (${#CHUNKS[@]} parte(s))..."

# Envía máximo 3 embeds por mensaje (límite de 6000 caracteres por mensaje)
MAX_EMBEDS=3
TOTAL=${#CHUNKS[@]}
i=0
while [ $i -lt $TOTAL ]; do
    END=$(( i + MAX_EMBEDS ))
    [ $END -gt $TOTAL ] && END=$TOTAL
    SLICE=("${CHUNKS[@]:$i:$((END - i))}")
    SLICE_JSON=$(printf '%s\n' "${SLICE[@]}" | jq -Rs 'split("\n")[:-1]')
    PAYLOAD=$(jq -n --argjson cs "$SLICE_JSON" --arg d "$PRETTY_DATE" --argjson start "$i" '{
        username: "Changelog",
        embeds: ($cs | to_entries | map({
            title: (if ($start + .key) == 0
                    then ("📝 Changelog · " + $d)
                    else ("📝 Changelog · " + $d + " (cont.)") end),
            description: .value,
            color: 5814783
        }))
    }')

    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" \
        -H "Content-Type: application/json" \
        -X POST \
        -d "$PAYLOAD" \
        "$DISCORD_WEBHOOK_URL")

    if [ "$HTTP_CODE" != "200" ] && [ "$HTTP_CODE" != "204" ]; then
        echo "❌ Error al enviar la notificación (HTTP $HTTP_CODE)"
        exit 1
    fi
    i=$END
done

echo "✅ Notificación enviada a Discord."
