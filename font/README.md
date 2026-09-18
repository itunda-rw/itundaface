# ItundaFace Color Font Pipeline

The SVG masters remain the single source of truth. This directory defines the deterministic mapping and build pipeline for ItundaFace color-font distributions.

## Pipeline

```text
SVG master → glyph manifest → stable glyph IDs → PUA mapping → SVG-in-OpenType TTF → platform packages
```

## Current implementation

The repository currently builds an **SVG-in-OpenType TrueType color font** from the canonical flat SVG masters. The generated TTF is a distribution artifact; it is never the source of truth.

The build is driven by `build-manifest.json`, generated from `glyphs.json` and `mapping.json`. `compiler.config.json` defines the binary target and coordinate policy.

## Rules

- Never redraw a glyph for the font.
- Never assign a semantic identity directly to a Unicode code point in product code.
- Keep stable ItundaFace glyph IDs independent from Unicode/private-use assignments.
- Use private-use mappings only for distribution formats that require them.
- Keep the committed mapping deterministic; changing a PUA assignment is a compatibility change and must be deliberate.
- Generated font files are build artifacts, not source assets.
- Web, Android, iOS and Flutter distributions must resolve to the same master glyphs.

## Initial mapping

The initial release maps the five calibration reactions to Private Use Area code points. The `itf_*` IDs are the stable semantic identifiers; PUA assignments are versioned distribution metadata.

## Future targets

COLR/CPAL and platform-specific packages can be added later through dedicated conversion/build stages. They must preserve the same glyph IDs, silhouette contract, semantic meaning, and canonical SVG masters rather than introducing independently redrawn artwork.
