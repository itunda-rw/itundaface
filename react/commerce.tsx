import type { SVGProps } from 'react';

export type CommerceKind = 'gift' | 'voucher' | 'package' | 'shopping-bag' | 'price-drop';
export type CommerceIconProps = SVGProps<SVGSVGElement> & { size?: number };

export function CommerceIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: CommerceIconProps & { kind: CommerceKind }) {
  const label = ariaLabel ?? `ItundaFace ${kind}`;
  return <svg width={size} height={size} viewBox="0 0 80 80" role="img" aria-label={label} {...props}>
    {kind === 'gift' && <><rect x="16" y="31" width="48" height="34" rx="5" fill="#7472F4"/><rect x="13" y="23" width="54" height="12" rx="4" fill="#282565"/><path d="M40 23v42M40 23c-13 0-18-5-13-11 6-6 13 3 13 11Zm0 0c13 0 18-5 13-11-6-6-13 3-13 11Z" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round"/></>}
    {kind === 'voucher' && <><path d="M14 24h52v13a7 7 0 0 0 0 14v13H14V51a7 7 0 0 0 0-14V24Z" fill="#7472F4"/><path d="M28 35h24M28 45h16" stroke="#fff" strokeWidth="5" strokeLinecap="round"/></>}
    {kind === 'package' && <><path d="m15 27 25-13 25 13v27L40 68 15 54V27Z" fill="#7472F4"/><path d="M15 27 40 41l25-14M40 41v27M28 20l25 14" fill="none" stroke="#fff" strokeWidth="4" strokeLinejoin="round"/></>}
    {kind === 'shopping-bag' && <><path d="M18 26h44l-5 39H23l-5-39Z" fill="#7472F4"/><path d="M29 28V22a11 11 0 0 1 22 0v6" fill="none" stroke="#282565" strokeWidth="6" strokeLinecap="round"/></>}
    {kind === 'price-drop' && <><path d="M40 12v45M24 43l16 16 16-16" fill="none" stroke="#7472F4" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 68h42" stroke="#282565" strokeWidth="6" strokeLinecap="round"/></>}
  </svg>;
}

export const CommerceGift = (props: CommerceIconProps) => <CommerceIcon kind="gift" {...props} />;
export const CommerceVoucher = (props: CommerceIconProps) => <CommerceIcon kind="voucher" {...props} />;
export const CommercePackage = (props: CommerceIconProps) => <CommerceIcon kind="package" {...props} />;
export const CommerceShoppingBag = (props: CommerceIconProps) => <CommerceIcon kind="shopping-bag" {...props} />;
export const CommercePriceDrop = (props: CommerceIconProps) => <CommerceIcon kind="price-drop" {...props} />;
