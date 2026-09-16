# ItundaFace Visual Design System

ItundaFace is Itunda's expressive glyph language. It follows the discipline of a professional emoji system while remaining an original visual identity for Itunda.

## 1. Brand identity

Canonical Itunda brand indigo comes from the Itunda IDS Agent Network theme:

- Light brand: `#7472F4`
- Dark brand: `#7675F8`

Use brand indigo for identity-bearing accents, secondary details, UI accents, and selected expressive moments. Do **not** recolor semantic objects indiscriminately: hearts can remain red, faces can remain warm/yellow, gifts can retain recognizable colors, etc.

## 2. Core construction

Every glyph should follow these rules:

- One unmistakable meaning.
- One dominant silhouette.
- Minimum geometry needed for recognition.
- Soft, intentional curves rather than arbitrary rounded rectangles.
- Consistent visual mass across the set.
- Shared seam/facet language where bilateral forms naturally allow it.
- No decorative detail that disappears below 18px.
- No stroke thinner than the minimum needed to survive rasterization at 14px.

## 3. Size tiers

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
- One consistent light direction across the library.
- Soft rim light and restrained ground shadow.
- Never turn the 3D version into a photorealistic object.

## 4. Color philosophy

Color communicates meaning first and brand second.

- Semantic colors remain recognizable.
- Itunda indigo is the recurring identity accent.
- Avoid rainbow palettes inside a single glyph.
- Keep the palette compact enough that the library feels like one family.
- Light and dark surfaces should preserve the same glyph meaning.

## 5. Expression system

Faces should communicate emotion through a small number of strong changes:

- Eye shape and angle.
- Brow angle where needed.
- Mouth geometry.
- Head/body tilt.
- One controlled accent such as a tear, sparkle, or motion mark.

Avoid tiny facial details that become noise at small sizes.

## 6. Itunda signature

The following details distinguish ItundaFace from generic emoji systems:

1. **Shared-seam construction** — inspired by the geometry of the Itunda mark.
2. **Indigo identity accent** — `#7472F4` / `#7675F8` appears selectively in non-semantic details.
3. **Flat-to-3D continuity** — the 3D glyph is a dimensional rendering of the same underlying drawing.
4. **Rwanda-native meaning** — future commerce, transport, places, finance, and community glyphs should reflect real Itunda use cases rather than merely reproducing a generic emoji catalog.

## 7. Quality gate

A glyph is ready only when it passes all of these checks:

- Recognizable at 14px.
- Looks balanced at 24px.
- Reads correctly on both light and dark backgrounds.
- Matches the visual weight of existing ItundaFace glyphs.
- Uses brand indigo only where it strengthens Itunda identity.
- Flat and 3D versions share the same silhouette.
- No borrowed TossFace artwork, vectors, or modified TossFace assets.
- SVG remains compact and maintainable.

## 8. Roadmap

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

The quality bar is **TossFace-level system discipline with an unmistakably Itunda visual identity** — not a visual copy of TossFace.
