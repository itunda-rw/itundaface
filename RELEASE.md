# ItundaFace 2.2.1

ItundaFace 2.2.1 makes the canonical React family API the package-level source of truth while preserving the existing legacy surface for compatibility.

## Scope

- Reactions
- Communication
- Places / maps / mobility
- Identity / security
- Commerce / marketplace
- Payments / finance
- Rwanda-native culture
- Product state / status
- Motion and reduced-motion grammar

## Canonical React entrypoint

The package root now resolves to `react/canonical.tsx`.

Canonical family modules are the source of truth for flat glyphs. The previous monolithic implementation remains available through the `./legacy` package subpath, and legacy-only helpers plus the reaction 3D exports remain available from the canonical entrypoint where they do not conflict with the modern family API.

## Usage guidance

Use flat glyphs for compact inline UI and 3D glyphs for deliberate prominent moments. Preserve semantic colors and use Itunda indigo selectively as the identity accent.

## Quality

Validate new glyphs at 14px and 24px for flat UI, and 32px, 40px, 48px, and 64px for 3D. Check optical balance, light/dark readability, silhouette continuity, accessibility labels, and family-level consistency. Canonical SVG assets and React implementations should describe the same geometry.

## Originality

TossFace is used as a reference for design-system discipline only. ItundaFace artwork is independently authored and must not copy, trace, modify, recolor, or combine TossFace artwork.

## License

MIT. See `LICENSE`.
