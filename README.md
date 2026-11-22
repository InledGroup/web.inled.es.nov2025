# Inled Group. 
Somos una marca de desarrollo de software pionera en desarrollo con agentes de IA y tecnologías libres.  

Tenemos más de 50 proyectos en Github y los usuarios disfrutan con ellos.  

Esta es nuestra nueva web, preparada para un 2026 próspero y fructífero.  

Descúbrela en [inled.es](https://inled.es)

## Documentos Markdown (`/docs`)

Cualquier `*.md` en la carpeta `docs/` se publica automáticamente en
`/docs/<nombre>` (y `/es/docs/<nombre>` cuando el idioma es español) y se
enlaza al final de las páginas. Copia `docs/_TEMPLATE.md` con otro nombre:

```markdown
---
title: "Política de privacidad"
description: "Texto corto que aparece bajo el enlace"
updatedAt: "2026-11-22"
order: 10
---

# Política de privacidad

Contenido en Markdown...
```

`order` controla el orden (menor primero); `description`, `updatedAt` y `lang`
son opcionales. Añade `draft: true` para guardar un documento sin publicarlo.