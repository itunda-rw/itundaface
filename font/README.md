# ItundaFace Color Font Pipeline

The SVG masters remain the single source of truth. This directory defines the deterministic mapping layer for the future color-font build.

## Pipeline

```text
SVG master → glyph manifest → glyph IDs → color-font source → platform packages
```

## Rules

- Never redraw a glyph for the font.
- Never assign a semantic identity directly to a Unicode code point in product code.
- Keep stable ItundaFace glyph IDs independent from Unicode/private-use assignments.
- Use private-use mappings only for distribution formats that require them.
- Generated font files are build artifacts, not source assets.
- Web, Android, iOS and Flutter distributions must resolve to the same master glyphs.

## Initial mapping

The initial release maps the five calibration reactions to stable internal code points in the Private Use Area. These assignments are distribution metadata and may change between font builds; the `itf_*` IDs do not.
