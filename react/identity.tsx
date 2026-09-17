import type { SVGProps } from 'react';

export type IdentityKind = 'lock' | 'verification' | 'id-card' | 'face-id';
export type IdentityIconProps = SVGProps<SVGSVGElement> & { size?: number };

const brand = '#7472F4';
const brandDark = '#514FC0';
const face = '#FFCC4D';
const faceShadow = '#D98E0A';
const skin = '#FFCF87';
const skinShadow = '#E0A655';
const ink = '#664500';
const inkSoft = '#66471B';
const white = '#FFFFFF';

const labels: Record<IdentityKind, string> = {
  lock: 'ItundaFace lock',
  verification: 'ItundaFace verification',
  'id-card': 'ItundaFace ID card',
  'face-id': 'ItundaFace Face ID',
};

export function IdentityIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: IdentityIconProps & { kind: IdentityKind }) {
  const a = { width: size, height: size, viewBox: '0 0 80 80', role: 'img' as const, 'aria-label': ariaLabel ?? labels[kind], ...props };

  if (kind === 'lock') return <svg {...a}>
    <rect x="13" y="34" width="54" height="36" rx="10" fill={brand}/>
    <path d="M24 35V27c0-10 7-17 16-17s16 7 16 17v8" fill="none" stroke={brandDark} strokeWidth="7" strokeLinecap="round"/>
    <circle cx="40" cy="51" r="5" fill={white}/>
    <path d="M40 55v7" stroke={white} strokeWidth="4" strokeLinecap="round"/>
    <path d="M16 28v-5a4 4 0 0 1 4-4h5M64 28v-5a4 4 0 0 0-4-4h-5" fill="none" stroke={face} strokeWidth="3" strokeLinecap="round"/>
  </svg>;

  if (kind === 'verification') return <svg {...a}>
    <circle cx="40" cy="40" r="29" fill={face}/>
    <circle cx="40" cy="40" r="24" fill="none" stroke={faceShadow} strokeWidth="3"/>
    <path d="M25 40.5 35 50l20-21" fill="none" stroke={ink} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 26c5-7 12-11 21-12M61 26c-5-7-12-11-21-12" fill="none" stroke={brand} strokeWidth="3" strokeLinecap="round"/>
  </svg>;

  if (kind === 'id-card') return <svg {...a}>
    <rect x="8" y="17" width="64" height="46" rx="10" fill={brand}/>
    <rect x="12" y="21" width="56" height="38" rx="7" fill={skin}/>
    <circle cx="27" cy="38" r="9" fill={skinShadow}/>
    <circle cx="27" cy="35.5" r="3.2" fill={ink}/>
    <path d="M20 47c2-4 12-4 14 0" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round"/>
    <path d="M43 33h18M43 42h14" stroke={inkSoft} strokeWidth="5" strokeLinecap="round"/>
    <circle cx="57" cy="51" r="5" fill={face}/>
    <path d="m54.5 51 2 2 3.5-4" fill="none" stroke={ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;

  return <svg {...a}>
    <circle cx="40" cy="40" r="28" fill={face}/>
    <circle cx="31" cy="36" r="3.2" fill={ink}/>
    <circle cx="49" cy="36" r="3.2" fill={ink}/>
    <path d="M29 49c6 5 16 5 22 0" fill="none" stroke={inkSoft} strokeWidth="4" strokeLinecap="round"/>
    <path d="M17 28v-6a5 5 0 0 1 5-5h6M63 28v-6a5 5 0 0 0-5-5h-6M17 52v6a5 5 0 0 0 5 5h6M63 52v6a5 5 0 0 1-5 5h-6" fill="none" stroke={brand} strokeWidth="4" strokeLinecap="round"/>
  </svg>;
}

export const IdentityLock = (props: IdentityIconProps) => <IdentityIcon kind="lock" {...props} />;
export const IdentityVerification = (props: IdentityIconProps) => <IdentityIcon kind="verification" {...props} />;
export const IdentityIdCard = (props: IdentityIconProps) => <IdentityIcon kind="id-card" {...props} />;
export const IdentityFaceId = (props: IdentityIconProps) => <IdentityIcon kind="face-id" {...props} />;
