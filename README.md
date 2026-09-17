# itundaface

**v2.2.1** — Itunda's independently authored expressive glyph system, built with TossFace-level system discipline but original Itunda artwork.

itundaface is a hand-drawn expressive glyph system for [itunda](https://github.com/itunda-rw/itunda), Rwanda's super-app. Core glyphs ship in flat form for small inline UI and 3D form for prominent moments.

## Why this exists

TossFace demonstrates the value of a disciplined visual system: simple geometry, optical consistency, controlled detail, coherent visual language, modular construction, and iterative refinement. itundaface applies those system principles while keeping its own artwork, indigo identity, semantic colors, and Rwanda-native product vocabulary.

So: itundaface is drawn from scratch and released under MIT — modify it, ship it, and build on it.

## Design principles

- **Simplest form, made beautiful.** Basic shapes, controlled curves, minimal detail, strong silhouettes.
- **One glyph, one meaning.** Meaning stays recognizable while construction remains distinctly Itunda.
- **Flat for small, 3D for prominent.** Flat glyphs target inline UI; 3D variants are reserved for deliberate key moments.
- **One palette, both themes.** Glyph meaning remains stable across light and dark surfaces.
- **System before scale.** Families are designed as systems before the library expands further.
- **Family-level QA.** Optical balance, repeated geometry, accessibility, and flat/3D continuity are reviewed across a whole family before release.

### itundaface's own signature

- **Shared-seam construction.** Natural bilateral forms can use a shared seam derived from the Itunda mark.
- **Real brand color on identity accents.** Itunda indigo `#7472F4` / `#7675F8` is used selectively where it strengthens identity without overriding semantic meaning.
- **Flat-to-3D continuity.** A 3D glyph is a dimensional rendering of the same underlying silhouette.
- **Rwanda-native meaning.** Product vocabulary is shaped by real Itunda use cases rather than by copying a generic emoji catalog.

## What's in here

```text
svg/
  flat/          5 master reaction glyphs
  3d/            5 matching master reaction glyphs + family variants
  communication/ chat, reply, send, voice, notification
  places/        place-category pictograms
  maps/          map/location pictograms
  mobility/      bike and e-bike pictograms
  identity/      lock, verification, ID card, face ID
  commerce/      gift, voucher, package, shopping bag
  finance/       16 canonical finance and payment glyphs
  culture/       celebration, Umuco, Agaseke, Umuganda, Umuganura
  motion/        canonical product-state motion grammar
  state/         success, verified, pending, warning, error, locked, processing, delivered, completed
react/            canonical family APIs + legacy-compatible helpers
```

## React API

The package root now resolves to the **canonical React entrypoint** `react/canonical.tsx`. This makes the typed family modules the default source of truth rather than the historical monolithic implementation.

Independently importable family entrypoints:

- `itundaface/reactions`
- `itundaface/communication`
- `itundaface/places`
- `itundaface/identity`
- `itundaface/commerce`
- `itundaface/culture`
- `itundaface/finance`
- `itundaface/state`
- `itundaface/families`
- `itundaface/validation`

The previous monolithic implementation remains available at `itundaface/legacy` for compatibility. The family API uses the canonical 80×80 coordinate system, configurable sizes, and accessible labels. Canonical SVG assets under `svg/` remain the visual source of truth.

## Master Reaction Set

The five canonical reactions are `thumbs-up`, `heart`, `laughing`, `wow`, and `sad`. They are the calibration set for optical size, expression geometry, color hierarchy, 2D↔3D silhouette parity, and rendering consistency.

## Rwanda-native culture

The culture inventory includes celebration, Umuco/community, Agaseke, Umuganda, and Umuganura. These are original ItundaFace vocabulary rather than copied third-party artwork.

## Motion

Motion is treated as a semantic layer rather than decoration. Canonical states include success, loading, notification, send, celebration, and error, with reduced-motion behavior documented for accessibility.

## Versioning

Current package release: **2.2.1**. The project follows semantic versioning for package metadata and release documentation.

## License

MIT. See [LICENSE](./LICENSE).

## Credit

The design process is informed by public documentation from [Toss](https://toss.im), especially its published TossFace system principles. No TossFace assets, code, or artwork are used here — itundaface is independently authored.
