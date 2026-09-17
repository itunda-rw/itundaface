# Compiler Status

## Implemented

- deterministic glyph manifest
- stable `itf_*` IDs
- PUA distribution mapping
- COLR/CPAL compiler configuration
- compiler input validation entrypoint
- explicit source-of-truth and coordinate policy

## Not yet claimed

The repository does **not** yet claim a production-ready `.ttf` binary. A real SVG-to-COLR conversion stage is still required and must be exercised in CI before publishing a font package.

This boundary is intentional: valid SVG and mapping metadata are not equivalent to a valid color-font binary.
