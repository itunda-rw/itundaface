# Compiler Status

## Implemented

- deterministic glyph manifest
- stable `itf_*` IDs
- PUA distribution mapping
- SVG-in-OpenType compiler configuration
- pinned FontTools build dependency
- deterministic SVG-master-to-TTF compiler
- compiler input validation entrypoint
- generated font table validation in CI
- explicit source-of-truth and coordinate policy

## Current binary target

The repository currently builds **SVG-in-OpenType** as `font/dist/ItundaFace-SVG.ttf`.

The compiler embeds the canonical flat SVG masters into the OpenType `SVG ` table and preserves the stable PUA mappings from `font/mapping.json`.

The generated TTF is a build artifact. The SVG masters remain authoritative.

## Not yet implemented

**COLR/CPAL is not the current binary target.** It remains a future target because the existing SVG artwork must not be automatically flattened or visually reinterpreted merely to satisfy a different color-font representation.

The 3D assets are also not embedded in the current font build. They remain a secondary presentation layer for product UI and can be incorporated into a future platform-specific packaging pipeline.

## Verification boundary

A valid manifest or SVG file alone is not sufficient. CI must compile the font and verify the resulting `SVG ` and `cmap` tables before the binary is treated as a verified build artifact.
