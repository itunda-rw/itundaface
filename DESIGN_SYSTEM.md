# ItundaFace Visual Design System

ItundaFace is Itunda's expressive glyph language. It uses professional emoji-system discipline while remaining an original visual identity for Itunda.

The quality target is **TossFace-level system discipline, not TossFace artwork**. TossFace documents a strong emphasis on simple geometry, optical equalization, consistent direction, consistent angle, shared viewing height, and a unified palette. ItundaFace adopts those *design-system principles* while keeping its own artwork, indigo identity, semantic colors, and Rwanda-native vocabulary.

## 1. Brand identity

Canonical Itunda brand indigo comes from the Itunda IDS Agent Network theme:

- Light brand: `#7472F4`
- Dark brand: `#7675F8`

Use brand indigo for identity-bearing accents, secondary details, UI accents, and selected expressive moments. Do **not** recolor semantic objects indiscriminately: hearts can remain red, faces can remain warm/yellow, gifts can retain recognizable colors, etc.

## 2. Master construction grammar

Every glyph should feel as if it came from the same drawing tool.

### 2.1 Primitive language

Prefer a small vocabulary of primitives:

- circles and ellipses
- straight segments
- controlled curves that resolve cleanly into those primitives
- simple planes/facets for dimensional forms

Avoid arbitrary free-form curves when a simpler construction communicates the same meaning. Complexity should come from combining simple parts, not from adding decorative geometry.

### 2.2 Silhouette first

Every glyph must have one unmistakable dominant silhouette.

- Remove any detail that does not improve recognition.
- Keep the silhouette readable when reduced to 14px.
- Preserve the same underlying silhouette between flat and 3D versions.
- Prefer proportion changes over extra detail when a glyph needs stronger expression.

### 2.3 Optical size

Numeric bounds are not enough. Glyphs must look equally large when placed beside one another.

Canonical flat canvas: `80 × 80`.

- Target occupied visual area: approximately 78% of the canvas.
- Acceptable range: approximately 68–88%, depending on the object.
- Center optically, not mathematically.
- Thin/tall objects may occupy less area while visually matching heavier objects.
- Full-body figures must be optically enlarged when they otherwise appear smaller than compact objects.

This is a visual QA rule, not a strict mathematical scaling rule.

## 3. Direction and angle

ItundaFace uses a shared reading flow so adjacent glyphs do not fight each other.

- Directional objects default to **left-to-right / facing right**.
- When an object has a deliberate tilt, the canonical tilt is **45° clockwise** unless its meaning would be damaged.
- Mirroring is allowed only when meaning requires it.
- Repeated directional families should use the same orientation.

## 4. Size tiers

### Flat / inline

Target sizes: 14, 16, 18, 20, 24px.

- Flat fills only.
- High silhouette contrast.
- No unnecessary shadow.
- Details must survive at 14px.

### 3D / key visual

Target sizes: 32, 40, 48, 64px+.

- Reuse the exact flat silhouette.
- Add controlled volume rather than changing the shape.
- Keep a consistent medium, front-biased camera.
- Use one top-left light direction across the library.
- Keep shadows soft and restrained.
- Use rim light consistently rather than independently inventing highlights.
- Never turn the 3D version into a photorealistic object.

## 5. Master reaction set

The first canonical reaction family is intentionally small and locked before expanding the catalog:

- `thumbs-up`
- `heart`
- `laughing`
- `sad`
- `wow`

These five are the reference set for proportion, optical size, expression, semantic color, indigo-accent placement, and flat-to-3D silhouette continuity. New reaction glyphs should be compared against this set before being added to the library.

The master set is a calibration family, not a claim that the library is complete. Its purpose is to prevent system drift as the catalog grows.

## 6. Color philosophy

Color communicates meaning first and brand second.

- Semantic colors remain recognizable.
- Itunda indigo is the recurring identity accent.
- Avoid rainbow palettes inside a single glyph unless the object inherently requires it.
- Keep the palette compact enough that the library feels like one family.
- Light and dark surfaces should preserve the same glyph meaning.

## 7. Expression system

Faces should communicate emotion through a small number of strong changes:

- eye shape and angle
- brow angle where needed
- mouth geometry
- head/body tilt
- one controlled accent such as a tear, sparkle, or motion mark

Avoid tiny facial details that become noise at small sizes.

## 8. Hands and repeated anatomy

Hands, faces, and other repeated anatomy must use shared proportions.

- Same palm-to-finger ratio across hand glyphs.
- Same finger thickness family.
- Same joint simplification.
- Same visual volume and placement.
- Expression changes should come from pose, not from inventing a new hand construction each time.

## 9. Itunda signature

The following details distinguish ItundaFace from generic emoji systems:

1. **Shared-seam construction** — derived from the geometry of the Itunda mark.
2. **Indigo identity accent** — `#7472F4` / `#7675F8` appears selectively in non-semantic details.
3. **Flat-to-3D continuity** — the 3D glyph is a dimensional rendering of the same underlying drawing.
4. **Rwanda-native meaning** — commerce, transport, places, finance, identity, and community glyphs should reflect real Itunda use cases rather than merely reproduce a generic emoji catalog.

## 10. Quality gate

A glyph is ready only when it passes all of these checks:

- Recognizable at 14px.
- Looks balanced at 24px.
- Has optical size comparable to neighboring glyphs.
- Reads correctly on both light and dark backgrounds.
- Follows the family direction and 45° angle rule where applicable.
- Matches the visual weight of existing ItundaFace glyphs.
- Uses brand indigo only where it strengthens Itunda identity.
- Flat and 3D versions share the same silhouette.
- 3D camera, light direction, and shadow language match the library.
- No borrowed TossFace artwork, vectors, or modified TossFace assets.
- SVG remains compact, accessible, and maintainable.

## 11. Roadmap

The target is a coherent expressive system, not simply a large icon count:

1. Reactions and emotions
2. Communication
3. Places and maps
4. Commerce and marketplace
5. Payments and finance
6. Delivery and mobility
7. Identity and security
8. Rwanda-native culture and celebration
9. Animated states for selected key moments

Each new family should be designed as a system before individual glyphs are produced.

## 12. Originality boundary

TossFace is a useful reference for system thinking, not a source of artwork. ItundaFace must remain independently authored.

Do not copy, trace, modify, recolor, or combine TossFace artwork. Build new ItundaFace geometry from the Itunda grammar and Itunda product meaning.
