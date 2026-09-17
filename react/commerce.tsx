import type { SVGProps } from 'react';

export type CommerceKind = 'gift' | 'voucher' | 'package' | 'shopping-bag';
export type CommerceIconProps = SVGProps<SVGSVGElement> & { size?: number };

const brand = '#7472F4';
const brandDark = '#514FC0';
const face = '#FFCC4D';
const heart = '#EF4A63';
const heartDeep = '#C72E4C';
const ink = '#664500';
const white = '#FFFFFF';

export function CommerceIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: CommerceIconProps & { kind: CommerceKind }) {
  const label = ariaLabel ?? `ItundaFace ${kind}`;
  return <svg width={size} height={size} viewBox="0 0 80 80" role="img" aria-label={label} {...props}>
    {kind === 'gift' && <><rect x="13" y="29" width="54" height="39" rx="6" fill={heart}/><rect x="11" y="25" width="58" height="11" rx="4" fill={heartDeep}/><path d="M40 25v43M18 42h44" stroke={face} strokeWidth="6" strokeLinecap="round"/><path d="M40 25c-8-1-16-5-16-11 0-4 3-6 7-6 6 0 9 8 9 17ZM40 25c8-1 16-5 16-11 0-4-3-6-7-6-6 0-9 8-9 17Z" fill={brand}/></>}
    {kind === 'voucher' && <><path d="M12 20a8 8 0 0 0 0 16 8 8 0 0 0 0 16 8 8 0 0 0 0 16v8h56v-8a8 8 0 0 0 0-16 8 8 0 0 0 0-16 8 8 0 0 0 0-16v-8Z" fill={face}/><path d="M28 20v40M52 20v40" stroke={brand} strokeWidth="4" strokeDasharray="5 5"/><path d="M33 30h14M33 40h14M33 50h9" stroke={ink} strokeWidth="4" strokeLinecap="round"/></>}
    {kind === 'package' && <><path d="M12 25 40 12l28 13-28 13Z" fill={face}/><path d="M12 25v31l28 13V38Z" fill="#D98E0A"/><path d="M68 25v31L40 69V38Z" fill={ink}/><path d="M40 38v31M26 19l28 13" stroke={brand} strokeWidth="4" strokeLinecap="round"/></>}
    {kind === 'shopping-bag' && <><path d="M15 25h50l-4 42H19Z" fill={brand}/><path d="M28 27v-7c0-7 5-12 12-12s12 5 12 12v7" fill="none" stroke={brandDark} strokeWidth="6" strokeLinecap="round"/><path d="M30 43h20" stroke={white} strokeWidth="5" strokeLinecap="round"/></>}
  </svg>;
}

export const CommerceGift = (props: CommerceIconProps) => <CommerceIcon kind="gift" {...props} />;
export const CommerceVoucher = (props: CommerceIconProps) => <CommerceIcon kind="voucher" {...props} />;
export const CommercePackage = (props: CommerceIconProps) => <CommerceIcon kind="package" {...props} />;
export const CommerceShoppingBag = (props: CommerceIconProps) => <CommerceIcon kind="shopping-bag" {...props} />;
