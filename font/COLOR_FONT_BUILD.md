# Color Font Build

The color-font layer is generated from the canonical SVG masters and `glyphs.json`.

## Current compiler

ItundaFace now produces a real **SVG-in-OpenType TrueType color font** using FontTools. FontTools supports the OpenType `SVG ` table for storing SVG representations of glyphs.

The current binary artifact is:

```text
font/dist/ItundaFace-SVG.ttf
```

## Build contract

1. Validate the glyph manifest.
2. Validate every referenced SVG master.
3. Validate the private-use mapping.
4. Generate `font/build-manifest.json` from stable `itf_*` IDs.
5. Compile the canonical flat SVG masters into the `SVG ` OpenType table.
6. Validate the resulting TTF contains `SVG ` and the expected five PUA mappings.
7. Upload the TTF as a CI artifact.

## Why SVG-in-OpenType first

The ItundaFace masters already contain vector paths, strokes, gradients, and other SVG-native construction. SVG-in-OpenType preserves those masters directly instead of approximating them through a partial shape-to-COLR converter.

COLR/CPAL remains a future packaging target when the project has a dedicated SVG-to-COLR conversion stage that can preserve the full ItundaFace visual contract.

No generated binary font is considered authoritative; the SVG masters remain authoritative.
