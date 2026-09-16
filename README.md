# itundaface

itunda's own reaction glyph set — built with TossFace-level system discipline, but with independently authored Itunda artwork.

itundaface is a hand-drawn expressive glyph system for [itunda](https://github.com/itunda-rw/itunda), Rwanda's Toss-style super-app. Each core glyph can ship in flat form for small inline UI and 3D form for prominent moments.

## Why this exists

TossFace demonstrates the value of a disciplined visual system: simple geometry, optical consistency, controlled detail, and a coherent visual language. itundaface applies those system principles while keeping its own artwork, indigo identity, semantic colors, and Rwanda-native product vocabulary.

So: itundaface is drawn from scratch and released under MIT — modify it, ship it, and build on it.

## Design principles

- **Simplest form, made beautiful.** Basic shapes, controlled curves, minimal detail, strong silhouettes.
- **One glyph, one meaning.** Meaning stays recognizable while construction remains distinctly Itunda.
- **Flat for small, 3D for prominent.** Flat glyphs target inline UI; 3D variants are reserved for deliberate key moments.
- **One palette, both themes.** Glyph meaning remains stable across light and dark surfaces.
- **System before scale.** Families are designed as systems before the library expands further.

### itundaface's own signature

- **Shared-seam construction.** Natural bilateral forms can use a shared seam derived from the Itunda mark.
- **Real brand color on identity accents.** Itunda indigo `#7472F4` / `#7675F8` is used selectively where it strengthens identity without overriding semantic meaning.
- **Flat-to-3D continuity.** A 3D glyph is a dimensional rendering of the same underlying silhouette.
- **Rwanda-native meaning.** Product vocabulary is shaped by real Itunda use cases rather than by copying a generic emoji catalog.

## What's in here

```
svg/
  flat/          5 master reaction glyphs
  3d/            5 matching master reaction glyphs + family variants
  communication/ chat, reply, send, voice, notification
  places/        place-category pictograms
  maps/          map/location pictograms
  mobility/      bike and e-bike pictograms
  identity/      lock, verification, ID card, face ID
  commerce/      gift, voucher, package, shopping bag
  finance/       money bag, settle-up, QR payment
  gifts/         existing gift/split-bill/voucher pictograms
  hearts/        2-state like/wishlist heart toggle
  security/      existing security glyphs
  misc/          low-repeat single-use pictograms
react/            thin React component wrappers
```

## Master Reaction Set

The five canonical reactions are:

- `thumbs-up`
- `heart`
- `laughing`
- `wow`
- `sad`

They are the calibration set for optical size, expression geometry, color hierarchy, 2D↔3D silhouette parity, and rendering consistency.

## Communication Set v1

The first communication family is intentionally small and product-oriented:

- `chat` — conversation entry / chat context
- `reply` — reply action / threaded response
- `send` — send action / message handoff
- `voice` — voice message / voice communication
- `notification` — message and activity notification

These are new ItundaFace communication forms, not copied TossFace artwork.

## Product families

### Places, maps & mobility

ItundaFace now includes a consistent 2D/3D vocabulary for places, navigation and mobility, including ATM, bus stop, map pin, bike and e-bike states.

### Identity & security

The identity family establishes a reusable vocabulary for trust and account states:

- `lock`
- `verification`
- `id-card`
- `face-id`

### Commerce

The commerce family covers common marketplace and delivery moments:

- `gift`
- `voucher`
- `package`
- `shopping-bag`

### Finance

The finance family begins with high-frequency money movement concepts:

- `money-bag`
- `settle-up`
- `qr-payment`

The same semantic shapes can be rendered flat for compact UI and 3D for key product moments.

## Using it

Grab any SVG directly or wrap it in your UI system. Keep the flat family for compact UI and reserve 3D for prominent moments.

## License

MIT. See [LICENSE](./LICENSE).

## Credit

The design process is informed by public documentation from [Toss](https://toss.im), especially its published TossFace system principles. No TossFace assets, code, or artwork are used here — itundaface is independently authored.
