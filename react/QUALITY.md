# ItundaFace React Quality Gate

Before publishing a React-facing ItundaFace change, verify:

## API

- Every family has a typed `Kind` union and `IconProps` type.
- Meaningful glyphs expose an accessible `role="img"` and `aria-label`.
- `size` defaults to 24px and preserves the canonical 80×80 viewBox.
- Family modules remain independently importable.
- `react/families.ts` exports every public family module.

## Visual parity

- Flat glyphs are checked at 14px and 24px.
- 3D glyphs are checked at 32px, 40px, 48px, and 64px.
- Flat and 3D variants retain the same semantic silhouette.
- Itunda indigo is used as an identity accent, not as a replacement for semantic color.
- Directional objects follow the established reading-flow rule.

## SVG safety

- Inline SVG definition IDs must be unique when a glyph contains `<defs>`.
- Do not introduce copied or traced third-party artwork.
- Keep SVG structure compact and avoid details that disappear at inline sizes.

## Release gate

A release is ready only after the package manifest, family exports, accessibility surface, and canonical SVG assets have been reviewed together.
