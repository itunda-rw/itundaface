# Color Font Build

The color-font layer is generated from the canonical SVG masters and `glyphs.json`.

## Build contract

1. Validate the glyph manifest.
2. Validate every referenced SVG master.
3. Generate `font/build-manifest.json` from stable `itf_*` IDs.
4. Feed that manifest into the selected color-font compiler.
5. Package the resulting font separately from the SVG source package.

## Why the compiler is separate

A color font is a binary distribution artifact. The repository deliberately keeps the artwork and semantic IDs independent from a specific font technology so the same ItundaFace masters can later target COLR/CPAL, SVG-in-OpenType, or platform-specific packaging without changing the source vocabulary.

No generated binary font is considered authoritative; the SVG masters remain authoritative.
