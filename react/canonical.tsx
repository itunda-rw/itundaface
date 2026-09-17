// ItundaFace canonical React entrypoint.
// The canonical family modules are the source of truth for flat glyphs.
// Legacy-only helpers and 3D reaction exports remain available for compatibility.
import * as Legacy from './index';

export * from './reactions';
export * from './communication';
export * from './places';
export * from './identity';
export * from './commerce';
export * from './finance';
export * from './culture';
export * from './state';
export * from './validation';

// Preserve legacy public exports that do not conflict with canonical family APIs.
export const {
  ReactionThumbsUp3D,
  ReactionHeart3D,
  ReactionLaughing3D,
  ReactionWow3D,
  ReactionSad3D,
  PlaceBase,
  GiftBase,
  GiftBox,
  GiftCongratulations,
  GiftHeartfelt,
  GiftGoodLuck,
  GiftSettleUp,
  SplitBillDice,
  VoucherTicket,
  HeartFilled,
  HeartOutline,
  WishlistHeart,
  LockGlyph,
  FlameGlyph,
  PackageGlyph,
  BikeGlyph,
  ElectricBikeGlyph,
  BikeTypeGlyph,
  PinGlyph,
  SoldOutGlyph,
  LinkGlyph,
  ChatGlyph,
  ClockGlyph,
  GlobeGlyph,
  BellGlyph,
  CameraGlyph,
  CakeGlyph,
  MoneyBagGlyph,
  ShoppingBagGlyph,
  WrenchGlyph,
  PriceDropGlyph,
} = Legacy;

export type { ItundaFaceIconProps } from './index';
