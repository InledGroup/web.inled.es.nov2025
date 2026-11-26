# Inled Group. 
Somos una marca de desarrollo de software pionera en desarrollo con agentes de IA y tecnologías libres.  

Tenemos más de 50 proyectos en Github y los usuarios disfrutan con ellos.  

Esta es nuestra nueva web, preparada para un 2026 próspero y fructífero.  

Descúbrela en [inled.es](https://inled.es)

## Despliegue (Vercel y Cloudflare)

El sitio es SSR (`output: 'server'`), así que necesita un adaptador real. En
`astro.config.mjs` se elige automáticamente:

- **Vercel:** usa `@astrojs/vercel` cuando existe la variable `VERCEL`, que
  Vercel define sola al compilar. El build genera `.vercel/output` y las rutas
  dinámicas funcionan como funciones serverless.
- **Cloudflare Pages:** en cualquier otro entorno usa `@astrojs/cloudflare`
  (`dist/_worker.js`), como hasta ahora.

En Vercel no hace falta configurar nada más: detecta Astro y ejecuta
`npm run build`. Las redirecciones cortas (`/warp`, `/cleany`, …) se declaran en
`astro.config.mjs`, por lo que funcionan en ambas plataformas; `/upload/*` se
resuelve en servidor en `src/pages/upload/[...slug].astro`.

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