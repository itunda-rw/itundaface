# itundaface

itunda's own reaction glyph set — built the way [Toss built TossFace](https://github.com/toss/tossface), released the way TossFace should have been.

itundaface is a small, hand-drawn set of expressive glyphs (👍 ❤️ 😂 😮 😢 today, more on the way) designed for [itunda](https://github.com/itunda-rw/itunda), Rwanda's Toss-style super-app. Each glyph ships in two forms: a flat version for small inline use, and a 3D version for prominent, deliberate moments — the same split [Toss's own real design process](https://toss.tech/article/22205) draws between its base emoji set and its Cinema-4D-rendered "key visual" variants.

## Why this exists

Toss built TossFace: 3,600 emoji, a real and genuinely well-designed set, with a clear, documented philosophy — simplest form from basic shapes, one color palette that reads on both light and dark surfaces, consistent visual weight across every glyph. We looked at it closely and wanted the same thing for itunda: **our own** expressive visual language, not a generic system-emoji fallback.

TossFace itself isn't available for that, though. It's public on GitHub and free to use as-is, but under [Toss's own custom license](https://github.com/toss/tossface/blob/main/LICENSE) — no commercial resale, no unauthorized modification, no using it to build something else's own identity. That's a reasonable choice for Toss to make about their own work. It just means it isn't a foundation another product can build on.

So: itundaface is our own set, drawn from scratch, released under a real open license (MIT) — modify it, ship it, build on it.

## Design principles

Adapted from studying TossFace's own real, published rules (not its artwork):

- **Simplest form, made beautiful.** Basic shapes — circles, straight lines, precisely-fitting curves. Minimal detail, so a glyph stays legible even at 14px.
- **One glyph, one meaning.** The style is ours; the meaning isn't up for redesign. A heart means love, a thumbs-up means approval, in itundaface exactly as everywhere else. (Toss's own early version of TossFace changed some glyphs' cultural meaning and walked it back within weeks after real user pushback — we started from that lesson instead of relearning it.)
- **Flat for small, 3D for prominent.** Every glyph in `svg/flat/` is a small, single-pass flat illustration meant for inline UI at ~14–18px. Every glyph in `svg/3d/` is the same shape with a radial-gradient shading pass, a rim-light, and a ground shadow — reserved for a genuinely prominent moment (a picker, a celebration screen), not forced onto small UI.
- **One palette, both themes.** No glyph changes color between light and dark backgrounds. If it reads on white, it reads on near-black too.

### itundaface's own signature

TossFace's own real recognizable traits are structural — uniform visual weight, every directional glyph facing right, one internal palette — not "everything is Toss Blue." itundaface has its own equivalent, not just itunda-colored generic emoji shapes:

- **Shared-seam construction.** Where a shape has natural bilateral symmetry, it's built the same way [itunda's own app icon](https://github.com/itunda-rw/itunda) is: one outer silhouette split by a single shared seam into a lit right facet and a shaded left facet, rather than one flat or single-gradient fill. `heart` is built this way today — a real, literal visual link back to the product's own mark, not applied where it wouldn't be a natural fit.
- **Real brand color on secondary elements.** Every glyph's non-semantic accent details (currently: the tear drop on `laughing`/`sad`) use itunda's actual indigo brand color, not a generic convention hue. A tear's exact color isn't meaning-bearing the way a heart's red or a face's yellow is — still unmistakably "a tear" in any cool tone — so this is a safe, deliberate consistency touch without repeating TossFace's own early meaning-changing misstep.

## What's in here

```
svg/
  flat/    5 reaction glyphs, flat fill, no gradients — inline UI, ~14-18px
  3d/      the same 5 reaction glyphs, radial-gradient shaded — prominent UI, ~32px+
  places/  13 place-category pictograms, flat only — map filter chips, ~16px
  gifts/   7 gift-theme + split-bill + voucher pictograms, flat only — chat gift flow, ~16px
  hearts/  2-state like/wishlist heart toggle, flat only — ~16-28px
  security/ 1 lock glyph, flat only, no badge — inline in running text, ~12-16px
  misc/    flame, package, bike + electric-bike, flat only, no badge — ~12-17px
react/     thin React component wrappers around the SVGs above
```

32 glyphs today:

- **Reactions** (`thumbs-up`, `heart`, `laughing`, `wow`, `sad`) — itunda's real chat quick-reactions.
- **Places** (`restaurant`, `cafe`, `hospital`, `pharmacy`, `bank`, `atm`, `hotel`, `supermarket`, `gas-station`, `school`, `agent`, `market`, `bus-stop`) — itunda's real map place-category markers, the largest single group.
- **Gifts** (`gift`, `congratulations`, `heartfelt`, `good-luck`, `settle-up`, `dice`, `voucher`) — itunda's real send-a-gift theme picker, the split-bill "ladder mode" glyph, and the gift-voucher flow.
- **Hearts** (`filled`, `outline`) — itunda's real like/wishlist toggle, reused across Marketplace, Jobs, Real Estate, Eats favorites, and Commerce. Same exact shape as the `heart` reaction glyph, traced two ways — itundaface's heart is the same heart everywhere.
- **Security** (`lock`) — itunda's real device step-up verification, escrow payment-held messaging, and frozen-card status.
- **Misc** (`flame`, `package`, `bike`, `ebike`) — Commerce's "Deals" rail and busy-merchant warning, Marketplace escrow delivery address, and BikeShareView's Regular/Electric bike-type label.

A few smaller groups (~10 misc single-use icons) are next; see [itunda's own build log](https://github.com/itunda-rw/itunda) for the running account of what's shipped and what's queued.

## Using it

Grab any SVG directly:

```html
<img src="https://raw.githubusercontent.com/itunda-rw/itundaface/main/svg/flat/heart.svg" width="18" height="18" alt="heart" />
```

Or with React:

```tsx
import { ReactionHeart, ReactionHeart3D } from 'itundaface/react';

<ReactionHeart size={18} />      {/* flat, small */}
<ReactionHeart3D size={32} />    {/* 3D, prominent */}
```

## License

MIT. See [LICENSE](./LICENSE). Use it, fork it, build your own product's identity on it — that's the point.

## Credit

Design process inspired by [Toss](https://toss.im)'s real, public account of building TossFace ([making-of article](https://toss.tech/article/22205), [design principles](https://toss.im/tossface)) and by [KakaoTalk](https://emoticonstudio.kakao.com)'s own emoticon platform, where animated, expressive glyphs consistently outperform static ones. No TossFace assets, code, or artwork are used here — itundaface is drawn from scratch.
