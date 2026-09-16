# ItundaFace React API

The React surface is organized by canonical family modules. Canonical SVG artwork remains under `svg/` and is the visual source of truth.

## Entrypoints

- `itundaface` — legacy/core reaction exports
- `itundaface/finance` — finance interaction icons
- `itundaface/state` — product-state icons
- `itundaface/families` — re-exports modern family modules

## API rules

- Keep the 80×80 coordinate system and configurable `size`.
- Meaningful icons expose an accessible `aria-label`.
- `title` may override the generated label; visible text is not required for semantics.
- Add new families as focused modules instead of expanding one monolithic component file.
- 3D inline SVG definitions must use collision-safe IDs when multiple instances can render together.

## Migration

The original root React entrypoint remains preserved for compatibility while consumers can migrate family-by-family to the canonical modules. This avoids a breaking rewrite of the existing inline-artwork implementation.
