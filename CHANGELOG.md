# Changelog

## 2.2.4 — 2026-09-17

### Visual QA hardening
- Completed canonical React ↔ SVG parity review across the eight family modules.
- Completed light/dark surface readability review while preserving semantic colors and Itunda indigo identity accents.
- Completed the 14px / 16px / 18px / 20px / 24px flat-size review and removed a non-surviving reaction detail.
- Improved small-size readability of the reaction accent seams without changing canonical silhouettes.
- Verified canonical flat Places artwork on the shared 80×80 coordinate system.
- Verified 3D assets retain the shared 80×80 coordinate system and accessibility metadata.

### Package
- Bumped package and design-token version to `2.2.4`.

## 2.2.3 — 2026-09-17

### Visual-system hardening
- Added a public quality-rules module for optical balance, minimum-size readability, directional consistency, 45° tilt consistency, compact palette discipline, shared 3D viewpoint, and flat/3D silhouette parity.
- Exposed the quality rules from the canonical package root and `families` API.
- Added the `itundaface/quality` package subpath.
- Strengthened design tokens with explicit visual-system quality targets.
- Updated the React quality gate to review complete families rather than isolated glyphs.

### Package
- Bumped package and token version to `2.2.3`.

## 2.2.2 — 2026-09-17

### Canonical package architecture
- Added `react/canonical.tsx` as the package's source-of-truth React entrypoint.
- The package root now resolves to canonical family modules instead of the legacy monolithic implementation.
- Preserved legacy-only helpers and 3D reaction exports for compatibility.
- Added the `./legacy` package subpath for consumers that intentionally need the previous monolithic implementation.

### Design-system QA
- Added a family-level release gate covering optical balance, repeated geometry, flat/3D silhouette parity, accessibility, canonical SVG/React parity, and minimum-size readability.
- Updated the design-system roadmap to reflect the current culture and state families.

### Package
- Bumped package version to `2.2.2`.

## 2.2.1 — 2026-09-17

### React API and parity
- Aligned the Places React family with the verified canonical flat artwork for agent, ATM, bank, bus stop, cafe, gas station, hospital, hotel, market, pharmacy, restaurant, school, and supermarket.
- Preserved the existing public Places kinds for pin, bike, and ebike where a verified canonical source was not available in the repository inventory.
- Aligned the Reactions React family with canonical flat geometry, including the thumbs-up accent, laughing highlight, wow accent, and sad tear/highlight details.
- Expanded the Finance React family from the interaction layer to the complete 16-glyph canonical inventory, including Rwanda-native product and payment vocabulary.
- Preserved accessible `aria-label` behavior and the existing typed family entrypoints.

### Package
- Bumped package version to `2.2.1`.

## 2.2.0 — 2026-09-16

### React API
- Added typed family entrypoints for reactions, communication, places, identity, commerce, culture, finance, and state.
- Added unified `react/families.ts` exports.
- Added validation constants for canonical flat and 3D sizes.
- Added React quality-gate documentation.
- Published package subpath exports for each family.
- Aligned the culture React API with the complete canonical culture SVG inventory.

### Package
- Bumped package and design-token version to `2.2.0`.

## 2.1.0 — 2026-09-16

### Added
- Rwanda-native culture glyphs: Agaseke, Umuganda, and Umuganura, with flat and 3D variants.
- Product-state family covering success, verified, pending, warning, error, locked, processing, delivered, and completed states.
- Rwanda-native finance vocabulary for mobile money, wallet, bill payment, airtime, merchant payment, transport payment, interoperable payment, and government-service payment.
- Flat and 3D finance variants with shared silhouettes and material grammar.

## 2.0.0 — 2026-09-16

### Added
- Master reaction family with flat and 3D variants.
- Communication, places/maps/mobility, identity/security, commerce, finance, culture, motion, and accessibility foundations.
- Shared 2D/3D construction, optical-size, material, and motion rules.

### Originality
ItundaFace is independently authored. TossFace is used only as a reference for visual-system discipline; no TossFace artwork, vectors, or modified assets are included.
