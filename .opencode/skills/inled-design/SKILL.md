# Inled Design System

## Fondo

Página completa con imagen de fondo fija que cubre todo el viewport:

```css
background: #000 url('https://hosted.inled.es/better.inled.png') no-repeat center center fixed;
background-size: cover;
```

La imagen es oscura con textura. El `#000` es el fallback. Toda la web se superpone sobre esta imagen.

## Glass Morphism

Efecto vidrio esmerilado presente en header, footer, secciones y overlays:

```css
background: rgba(20, 20, 25, 0.7);       /* header/taskbar */
background: rgba(15, 15, 20, 0.4);       /* footer */
background: rgba(10, 10, 15, 0.6);       /* secciones (comunidad, archivados) */
background: rgba(255, 255, 255, 0.02);   /* cards individuales */

backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
```

Variantes:
- `blur(20px)` — header, secciones principales
- `blur(24px) saturate(180%)` — footer
- `blur(6px)` — cursor personalizado, Showcase cards

## Paleta de Colores

### Texto
| Uso | Valor |
|-----|-------|
| Títulos principales | `#fff` |
| Texto normal | `rgba(255, 255, 255, 0.85)` |
| Texto secundario | `rgba(255, 255, 255, 0.6)` |
| Texto terciario / muted | `rgba(255, 255, 255, 0.5)` |
| Texto muy suave | `rgba(255, 255, 255, 0.4)` |
| Texto Disabled | `rgba(255, 255, 255, 0.25)` |

### Bordes
| Uso | Valor |
|-----|-------|
| Bordes de sección | `rgba(255, 255, 255, 0.08)` |
| Bordes de cards | `rgba(255, 255, 255, 0.12)` |
| Bordes hover | `rgba(255, 255, 255, 0.2)` |
| Bordes header/taskbar | `rgba(255, 255, 255, 0.15)` |
| Bordes internos / divider | `rgba(255, 255, 255, 0.05)` |
| Bordes activos / fuertes | `rgba(255, 255, 255, 0.25)` |

### Acentos de marca
| Color | Uso |
|-------|-----|
| `#5865f2` | Discord |
| `#0dbd8b` | Matrix |
| `#f87171` | Errores / archivado |
| `#22c55e` | Success |

### Backgrounds de hover
```css
background: rgba(255, 255, 255, 0.06);  /* cards */
background: rgba(255, 255, 255, 0.1);   /* botones, items de nav */
background: rgba(25, 25, 30, 0.85);     /* header/taskbar en hover */
```

## Tipografía

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Jerarquía
| Elemento | Tamaño | Peso | Letter-spacing |
|----------|--------|------|----------------|
| Título hero / sección principal | `clamp(2.5rem, 5vw, 4rem)` | 900 | `-0.05em` |
| Título de sección | `clamp(1.5rem, 3vw, 2rem)` | 800 | `-0.03em` |
| Título de card | `1.4rem` | 800 | `-0.02em` |
| Subtítulo de sección | `1.2rem` | 400 | — |
| Texto de card | `1rem` | 400 | — |
| Texto pequeño | `0.9rem` | 400 | — |
| Labels / badges | `0.7rem - 0.8rem` | 700 | `0.08em - 0.12em` |

## Cards

Patrón base de tarjetas:

```css
background: rgba(255, 255, 255, 0.02);   /* fondo sutil */
border: 1px solid rgba(255, 255, 255, 0.08);  /* borde */
border-radius: 12px;
padding: 2.5rem 2rem;

transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
```

Hover:
```css
background: rgba(255, 255, 255, 0.05);
border-color: rgba(255, 255, 255, 0.2);
transform: translateY(-4px);
```

Variantes:
- **Cards densas** (grid): `padding: 1.5rem 1.75rem`, gap más pequeño
- **Cards archivadas**: mismo patrón pero con `gap: 1.25rem` y `padding: 2rem`
- **Cards contribución**: fondo `rgba(255, 255, 255, 0.03)`, borde `0.12`

## Botones

```css
/* Base */
display: inline-flex;
align-items: center;
gap: 0.5rem - 0.6rem;
padding: 0.75rem 1.4rem;
border-radius: 6px - 8px;
font-size: 0.85rem - 0.9rem;
font-weight: 600;
text-decoration: none;
transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
```

Variantes de color:
```css
/* Discord */
background: rgba(88, 101, 242, 0.12);
color: #7289da;
border: 1px solid rgba(88, 101, 242, 0.3);
/* Hover → background: #5865f2; box-shadow: 0 4px 20px rgba(88, 101, 242, 0.3); */

/* Matrix */
background: rgba(13, 189, 139, 0.1);
color: #0dbd8b;
border: 1px solid rgba(13, 189, 139, 0.25);
/* Hover → background: #0dbd8b; box-shadow: 0 4px 20px rgba(13, 189, 139, 0.3); */

/* GitHub / neutro */
background: rgba(255, 255, 255, 0.04);
color: rgba(255, 255, 255, 0.8);
border: 1px solid rgba(255, 255, 255, 0.1);
/* Hover → background: rgba(255, 255, 255, 0.1); */
```

Hover general: `transform: translateY(-2px)` + `box-shadow` con el color correspondiente.

## Transiciones

```css
/* Spring / Apple-style (principal) */
transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

/* Suave / Ease (secundario) */
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* Transiciones de fade */
transition: opacity 0.5s ease, filter 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
```

## Layout

```css
max-width: 1400px;   /* contenedor principal de secciones */
max-width: 1200px;   /* footer */
margin: 0 auto;
```

### Spacing entre secciones
```css
padding: 6rem 2rem;     /* secciones grandes (hero, archivados) */
padding: 4rem 2rem;     /* secciones normales (community, links, incubadora) */
padding: 3rem 1.5rem;   /* mobile */
```

### Dividers entre secciones
```css
border-top: 1px solid rgba(255, 255, 255, 0.08);
border-bottom: 1px solid rgba(255, 255, 255, 0.08);
```

### Headers de sección (debajo del título)
```css
border-bottom: 1px solid rgba(255, 255, 255, 0.05);
padding-bottom: 1.5rem - 2rem;
margin-bottom: 2rem - 2.5rem;
```

## Header / Taskbar

Floating header centrado en la parte superior:

```css
position: fixed;
top: 1.5rem;
z-index: 2000;

background: rgba(20, 20, 25, 0.7);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.15);
border-radius: 20px;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
```

Items del taskbar: `44x44px`, `border-radius: 12px`, hover con `background: rgba(255, 255, 255, 0.1)`.

## Footer

```css
background: rgba(15, 15, 20, 0.4);
backdrop-filter: blur(24px) saturate(180%);
border-top: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.3);
```

Línea de brillo superior (efecto cristal):
```css
footer::before {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  height: 1px;
}
```

## Responsive Breakpoints

| Breakpoint | Comportamiento |
|------------|----------------|
| `1024px` | Showcase strip cambia a columna vertical, cursor se oculta |
| `968px` | Footer cambia a 1 columna |
| `768px` | Header social se oculta, dock social aparece abajo, grids a 1 columna |
| `640px` | Footer nav a 1 columna |
| `480px` | Taskbar gap más pequeño |

```css
@media (max-width: 1024px), (orientation: portrait) { ... }
@media (max-width: 768px) { ... }
@media (min-width: 769px) { ... }
```

## Efectos Especiales

### Shimmer / Brillo de pasada
Efecto de brillo que recorre una card de izquierda a derecha en loop:
```css
.card::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 60%; height: 100%;
  background: linear-gradient(105deg,
    transparent 0%, transparent 40%,
    rgba(255, 255, 255, 0.03) 45%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0.03) 55%,
    transparent 60%, transparent 100%
  );
  animation: shimmer 4s ease-in-out infinite;
  pointer-events: none;
}
```

### Cursor personalizado (showcase)
```css
width: 90px; height: 90px;
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(255, 255, 255, 0.25);
backdrop-filter: blur(6px);
border-radius: 50%;
```

## Convenciones

- **Nunca** usar colores sólidos puros para fondos — siempre `rgba` con transparencia
- **Nunca** border-radius mayor a `20px` (excepto pill badges: `100px`)
- **Siempre** incluir `-webkit-backdrop-filter` junto a `backdrop-filter`
- **Siempre** usar `text-decoration: none` en enlaces
- Las cards y secciones usan `position: relative; overflow: hidden` para contener pseudo-elementos
- Iconos: Font Awesome (`fa-brands`, `fa-solid`) o SVGs inline con `stroke="currentColor"`
- Imágenes de productos: `object-fit: contain` nunca `cover`
