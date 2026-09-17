import type { SVGProps } from 'react';

export type CultureKind = 'celebration' | 'umuco' | 'agaseke' | 'umuganda' | 'umuganura';
export type CultureIconProps = SVGProps<SVGSVGElement> & { size?: number };

const brand = '#7472F4';
const face = '#FFCC4D';
const skin = '#FFCF87';
const ink = '#664500';
const inkSoft = '#66471B';
const earth = '#D98E0A';
const green = '#156631';
const umucoFill = '#B3D5B9';
const umugandaAccent = '#7C7BFD';

export function CultureIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: CultureIconProps & { kind: CultureKind }) {
  const labels: Record<CultureKind, string> = {
    celebration: 'ItundaFace celebration', umuco: 'ItundaFace community', agaseke: 'ItundaFace agaseke basket', umuganda: 'ItundaFace umuganda community work', umuganura: 'ItundaFace umuganura harvest celebration',
  };
  return <svg width={size} height={size} viewBox="0 0 80 80" role="img" aria-label={ariaLabel ?? labels[kind]} {...props}>
    {kind === 'celebration' && <><path d="M40 16v10M40 54v10M16 40h10M54 40h10M23 23l7 7M50 50l7 7M57 23l-7 7M30 50l-7 7" stroke={brand} strokeWidth="4.5" strokeLinecap="round"/><path d="M40 25c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15Z" fill={face}/><path d="M33 38c2-3 4.5-3 7 0M47 38c-2-3  -4.5-3 -7 0" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round"/><path d="M33 46c4 4 10 4 14 0" fill="none" stroke={inkSoft} strokeWidth="3.5" strokeLinecap="round"/></>}
    {kind === 'umuco' && <><circle cx="40" cy="40" r="30" fill={umucoFill}/><circle cx="40" cy="29" r="8" fill={skin}/><circle cx="24" cy="36" r="6.5" fill={skin}/><circle cx="56" cy="36" r="6.5" fill={skin}/><path d="M25 58c1-10 7-15 15-15s14 5 15 15" fill={green}/><path d="M13 58c.7-7 4.8-11 11-11 3.2 0 5.7 1 7.5 3M67 58c-.7-7-4.8-11-11-11-3.2 0-5.7 1-7.5 3" fill="none" stroke={green} strokeWidth="6" strokeLinecap="round"/><path d="M40 19v-5M37 16h6" stroke={brand} strokeWidth="2.5" strokeLinecap="round"/></>}
    {kind === 'agaseke' && <><path d="M17 30h46l-4 35c-.5 4-3.8 7-7.8 7H28.8c-4 0-7.3-3-7.8-7L17 30Z" fill={earth}/><path d="M22 30c1-10 8-17 18-17s17 7 18 17" fill="none" stroke={brand} strokeWidth="4" strokeLinecap="round"/><path d="M21 39h38M22 49h36M23 59h34" stroke={ink} strokeWidth="3" strokeLinecap="round" opacity=".75"/><path d="M25 34l30 30M55 34L25 64" stroke={face} strokeWidth="2.5" strokeLinecap="round" opacity=".9"/></>}
    {kind === 'umuganda' && <><path d="M18 63h44" stroke={brand} strokeWidth="6" strokeLinecap="round"/><path d="M27 61 38 34" fill="none" stroke={ink} strokeWidth="7" strokeLinecap="round"/><path d="M38 34 54 25" fill="none" stroke={earth} strokeWidth="7" strokeLinecap="round"/><path d="M50 25c4-5 10-7 15-4-1 6-6 10-12 9" fill={umugandaAccent}/><path d="M22 47c5-8 12-12 20-12s15 4 20 12" fill="none" stroke={face} strokeWidth="5" strokeLinecap="round"/></>}
    {kind === 'umuganura' && <><path d="M40 17v48" stroke={brand} strokeWidth="3.5" strokeLinecap="round"/><path d="M40 28c-8-8-18-7-22-2 5 5 13 8 22 2ZM40 40c8-8 18-7 22-2-5 5-13 8-22 2ZM40 51c-8-8-18-7-22-2 5 5 13 8 22 2Z" fill={earth}/><path d="M40 28c8-8 18-7 22-2-5 5-13 8-22 2ZM40 51c8-8 18-7 22-2-5 5-13 8-22 2Z" fill={face}/><path d="M30 66h20" stroke={ink} strokeWidth="4" strokeLinecap="round"/><circle cx="40" cy="12" r="4" fill={brand}/></>}
  </svg>;
}

export const CultureCelebration = (props: CultureIconProps) => <CultureIcon kind="celebration" {...props} />;
export const CultureUmuco = (props: CultureIconProps) => <CultureIcon kind="umuco" {...props} />;
export const CultureAgaseke = (props: CultureIconProps) => <CultureIcon kind="agaseke" {...props} />;
export const CultureUmuganda = (props: CultureIconProps) => <CultureIcon kind="umuganda" {...props} />;
export const CultureUmuganura = (props: CultureIconProps) => <CultureIcon kind="umuganura" {...props} />;
