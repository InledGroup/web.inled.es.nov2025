#!/bin/bash

# Script para notificar a Google que el sitemap ha sido actualizado
# Uso: ./notify-google.sh

SITEMAP_URL="https://inled.es/sitemap-index.xml"

echo "🔔 Notificando a Google sobre la actualización del sitemap..."

# Google Indexing Ping
curl -s "https://www.google.com/ping?sitemap=$SITEMAP_URL" > /dev/null

if [ $? -eq 0 ]; then
    echo "✅ Notificación enviada con éxito a Google."
else
    echo "❌ Error al enviar la notificación."
fi

# Opcional: Bing IndexNow (Si usas Cloudflare, esto suele ser automático, pero no está de más)
echo "🔔 Notificando a Bing/Yandex (IndexNow)..."
# Aquí se podría añadir la lógica de IndexNow si tienes una API Key de Bing
