# ItundaFace Motion Grammar

Motion is an optional communication layer over the canonical glyph. It must preserve the base silhouette and meaning.

## Principles

- **Meaning before motion.** Animation should clarify a state, not decorate it.
- **Small movement.** Prefer short, readable transforms over continuous spectacle.
- **One primary axis.** Scale, rotation, translation, or opacity should lead; secondary motion stays restrained.
- **Respect the 45° rule.** Directional objects keep the canonical orientation during motion.
- **3D continuity.** Camera, light direction, material, and silhouette remain unchanged.
- **Reduced motion.** Every motion state must have a static equivalent.

## Canonical states

| State | Primary motion | Use |
| --- | --- | --- |
| success | scale-in + settle | completed payment/action |
| loading | gentle orbit | waiting for a result |
| notification | short vertical bounce | new activity |
| send | short forward translation | message handoff |
| celebration | small radial burst | achievement/celebration |
| error | restrained horizontal shake | recoverable failure |

These are behavior specifications, not animated artwork. Implementations may use CSS, Lottie, native animation, or another runtime while preserving the same timing intent.

## Timing

- Entry: 160–220ms
- Settle: 180–260ms
- Notification: 2–3 compact beats
- Error shake: 2–3 small beats, never a large wobble
- Celebration burst: under 700ms for the full interaction

Avoid infinite motion except for loading states.
