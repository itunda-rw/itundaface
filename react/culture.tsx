import type { SVGProps } from 'react';

export type CultureKind = 'celebration' | 'umuco';
export type CultureIconProps = SVGProps<SVGSVGElement> & { size?: number };

export function CultureIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: CultureIconProps & { kind: CultureKind }) {
  const label = ariaLabel ?? `ItundaFace ${kind}`;
  return <svg width={size} height={size} viewBox="0 0 80 80" role="img" aria-label={label} {...props}>
    {kind === 'celebration' && <><circle cx="40" cy="40" r="27" fill="#FFCC4D"/><path d="M25 47c5 8 25 8 30 0" fill="none" stroke="#664500" strokeWidth="5" strokeLinecap="round"/><circle cx="30" cy="34" r="3" fill="#664500"/><circle cx="50" cy="34" r="3" fill="#664500"/><path d="M14 20v10M9 25h10M66 50v12M60 56h12M20 60l-4 7M60 20l4-7" stroke="#7472F4" strokeWidth="4" strokeLinecap="round"/></>}
    {kind === 'umuco' && <><circle cx="40" cy="40" r="29" fill="#7472F4"/><circle cx="40" cy="27" r="8" fill="#fff"/><circle cx="25" cy="38" r="7" fill="#fff"/><circle cx="55" cy="38" r="7" fill="#fff"/><path d="M25 58c1-10 8-15 15-15s14 5 15 15" fill="#fff"/><path d="M12 62c1-7 5-11 11-12M68 62c-1-7-5-11-11-12" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round"/></>}
  </svg>;
}

export const CultureCelebration = (props: CultureIconProps) => <CultureIcon kind="celebration" {...props} />;
export const CultureUmuco = (props: CultureIconProps) => <CultureIcon kind="umuco" {...props} />;
