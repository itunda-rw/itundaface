# ItundaFace TossFace-Level Parity Specification

> Target: match the **system discipline and technical completeness** demonstrated by TossFace, while keeping all ItundaFace artwork independently authored.

TossFace publicly documents six core consistency principles: simplest forms, equal optical size, one color palette, a shared directional flow, a consistent 45° angle for tilted objects, and a common viewing height. It also ships as a 3,600-emoji font and is continuously updated.

ItundaFace adopts those principles as engineering/design constraints—not as artwork references.

## 1. Non-negotiable construction rules

| Rule | ItundaFace requirement |
|---|---|
| Geometry | Simple primitives first; complexity comes from composition |
| Optical size | Glyphs must appear equally large, not merely share a bounding box |
| Palette | Compact canonical palette with semantic colors + selective Itunda indigo |
| Direction | Directional subjects default to facing/moving right |
| Tilt | Canonical object tilt is 45° clockwise where meaning permits |
| Camera | 3D objects share one front-biased viewing height |
| Silhouette | Flat and 3D variants preserve the same master silhouette |
| Detail | Every detail must survive or remain irrelevant at 14px |
| Weight | Families share a common visual mass and curve language |
| Themes | Light/dark surfaces preserve meaning and hierarchy |

## 2. Master glyph contract

Every glyph must have a stable machine-readable identity:

```text
id
name
category
semanticMeaning
canvas
opticalBounds
anchor
canonicalDirection
canonicalRotation
palette
flatAsset
threeDAsset
status
```

### Canonical canvas

- Flat master: `80 × 80`
- Safe area: `72 × 72`
- Target optical occupancy: `~78%`
- Acceptable optical occupancy: `68–88%` depending on subject
- Optical centering overrides mathematical centering

### Size QA

Required review sizes:

- `14px` — recognition gate
- `16px` — inline UI gate
- `20px` — compact product gate
- `24px` — standard product gate
- `32px` — expressive UI gate
- `48px` — prominent glyph gate
- `64px+` — 3D/key-moment gate

## 3. Color contract

Brand identity:

- Light Itunda indigo: `#7472F4`
- Dark Itunda indigo: `#7675F8`

Rules:

1. Semantic color wins over brand color when the object has a universal meaning.
2. Indigo is the recurring Itunda identity accent.
3. A glyph should not become visually noisy because of unnecessary colors.
4. The same semantic meaning must remain stable across light and dark surfaces.

## 4. 3D contract

3D is a rendering layer over the flat master—not a separate illustration.

- Same silhouette.
- Same proportions.
- Same semantic marks.
- Same canonical camera height.
- Same top-left light direction.
- Restrained three-stop volume.
- Soft, consistent ground shadow.
- No photorealism.
- No material-specific effects unless a family explicitly defines them.

## 5. Font roadmap

TossFace's defining technical property is that its emoji are distributed as a font. ItundaFace therefore targets a color-font distribution layer after the SVG system is stable.

### Phase A — canonical assets

- SVG masters
- normalized viewBox
- metadata manifest
- flat/3D naming parity
- automated structural validation

### Phase B — font source

- Unicode/private-use mapping where appropriate
- glyph naming convention: `itf_<category>_<name>`
- stable glyph IDs independent of Unicode assignment
- color-font source kept separate from semantic metadata

### Phase C — platform packages

- Web color font
- Android-compatible asset package
- iOS-compatible asset package
- Flutter package
- React package

No platform package may introduce a visually different master glyph.

## 6. Library expansion target

The current library is a product-focused foundation. The long-term target is a broad expressive vocabulary comparable in **system completeness**, not copied content, to TossFace's 3,600-emoji scope.

Priority order:

1. Faces and expressions
2. People and gestures
3. Communication
4. Identity and security
5. Finance and payments
6. Commerce and marketplace
7. Places, maps and mobility
8. Rwanda-native culture and celebration
9. Nature and animals
10. Objects and technology
11. Actions and status
12. Symbols and navigation
13. Itunda-specific product vocabulary

## 7. Automated quality gates

A future CI validator must reject a glyph family when it violates any of these:

- malformed SVG
- missing `viewBox`
- inconsistent master dimensions
- unexpected transforms
- raster image embedding
- optical bounds outside family limits
- missing metadata
- flat/3D naming mismatch
- missing dark/light preview
- missing category
- missing semantic meaning
- prohibited copied TossFace assets

Visual review remains mandatory for optical size, expression quality and semantic clarity; automation cannot replace human optical judgment.

## 8. Originality boundary

This project may learn from publicly documented design principles, but must not copy, trace, modify, recolor, or redistribute TossFace artwork, vectors, font files, or derivative assets.

The goal is **TossFace-level discipline with 100% Itunda-authored artwork and vocabulary**.
