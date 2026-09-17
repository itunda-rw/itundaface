# ItundaFace Color Font Compiler

The color-font pipeline now has an explicit compiler contract.

## Source of truth

`svg/` masters are authoritative. The compiler must never redraw, simplify, or reinterpret glyph artwork.

```text
SVG masters
   ↓
glyphs.json
   ↓
font/mapping.json
   ↓
font/build-manifest.json
   ↓
font/compiler.config.json
   ↓
COLR/CPAL compiler
   ↓
ItundaFace-COLR.ttf
```

## Target

The first binary-font target is **COLR/CPAL**. The contract uses a 1000-unit em and maps the canonical 80×80 master canvas through the declared coordinate policy.

The generated TTF is a build artifact. It must never replace the SVG masters as the source of truth.

## Required build environment

- Node.js 20+
- Python 3+
- FontTools with COLR/CPAL support

The repository currently validates the compiler inputs and contract. Binary generation should only be enabled once the CI environment has a pinned, reproducible FontTools version and a tested SVG-to-COLR conversion implementation.

## Important boundary

The current `compile-color-font.mjs` deliberately fails fast when the compiler prerequisite is unavailable. It does **not** claim that a binary font has been generated merely because the manifests are valid.
