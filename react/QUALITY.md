# ItundaFace React Quality Gate

ItundaFace follows the documented TossFace principles of simple geometry, visual size consistency, one directional reading flow, consistent angle, compact palette, and a shared viewpoint — while keeping all artwork independently authored for Itunda. TossFace's own documentation describes these as core principles of its system. 

Before publishing a React-facing ItundaFace change, verify:

## API

- Every family has a typed `Kind` union and `IconProps` type.
- Meaningful glyphs expose a semantic `role="img"` and `aria-label`.
- `size` defaults to 24px and preserves the canonical 80×80 viewBox.
- Family modules remain independently importable.
- `react/families.ts` and the package root expose the same canonical family surface.
- Visual quality rules are available through `itundaface/quality`.

## Visual construction

- Start with circles, lines, and controlled curves; avoid arbitrary free-form curves when an equivalent primitive works.
- Build the silhouette before adding internal details.
- Remove details that do not survive at 14px.
- Keep optical occupied area within the 68–88% target range, with 78% as the default target.
- Review glyphs at 14px and 24px side by side rather than judging them only at source size.

## System consistency

- Directional objects face right so text and glyphs maintain one reading flow.
- Objects with a deliberate tilt use the shared 45° clockwise rule unless semantics require an exception.
- Repeated anatomy uses the same proportions, thickness, volume, and placement.
- Flat glyphs use one compact visual palette across light and dark surfaces.
- Semantic color takes priority over brand accent; indigo identifies Itunda without recoloring everything.
- 3D variants use the same underlying silhouette, consistent viewing height, camera, lighting direction, and restrained shadow language.

## Visual parity

- Flat glyphs are checked at 14px and 24px.
- 3D glyphs are checked at 32px, 40px, 48px, and 64px.
- Flat and 3D variants retain the same semantic silhouette.
- Light and dark surfaces preserve recognition and contrast.
- Canonical SVG geometry and React geometry describe the same artwork.

## SVG safety

- Inline SVG definition IDs must be unique when a glyph contains `<defs>`.
- Do not introduce copied, traced, recolored, or modified TossFace artwork.
- Keep SVG structure compact and avoid details that disappear at inline sizes.

## Release gate

A release is ready only after the package manifest, family exports, quality rules, accessibility surface, and canonical SVG assets have been reviewed together as complete families.
