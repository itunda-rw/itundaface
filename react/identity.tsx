import type { SVGProps } from 'react';

export type IdentityKind = 'lock' | 'verification' | 'id-card' | 'face-id';
export type IdentityIconProps = SVGProps<SVGSVGElement> & { size?: number };

export function IdentityIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: IdentityIconProps & { kind: IdentityKind }) {
  const label = ariaLabel ?? `ItundaFace ${kind}`;
  return <svg width={size} height={size} viewBox="0 0 80 80" role="img" aria-label={label} {...props}>
    {kind === 'lock' && <><rect x="14" y="34" width="52" height="36" rx="9" fill="#282565"/><path d="M24 35V27c0-10 7-17 16-17s16 7 16 17v8" fill="none" stroke="#7472F4" strokeWidth="7" strokeLinecap="round"/><circle cx="40" cy="51" r="5" fill="#FFFFFF"/><path d="M40 55v7" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/></>}
    {kind === 'verification' && <><circle cx="40" cy="40" r="30" fill="#8BDECB"/><path d="M25 41l9 9 21-23" fill="none" stroke="#006455" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 26c5-7 12-11 21-12M61 26c-5-7-12-11-21-12" fill="none" stroke="#7472F4" strokeWidth="3" strokeLinecap="round"/></>}
    {kind === 'id-card' && <><rect x="9" y="18" width="62" height="44" rx="9" fill="#C0C6FF"/><circle cx="27" cy="39" r="10" fill="#282565"/><circle cx="27" cy="36" r="3.5" fill="#FFFFFF"/><path d="M20 48c2-4 12-4 14 0" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/><path d="M44 34h17M44 43h13" stroke="#282565" strokeWidth="5" strokeLinecap="round"/><path d="M52 22l7 3" stroke="#7472F4" strokeWidth="3" strokeLinecap="round"/></>}
    {kind === 'face-id' && <><circle cx="40" cy="40" r="28" fill="#FFCC4D"/><circle cx="31" cy="36" r="3.2" fill="#664500"/><circle cx="49" cy="36" r="3.2" fill="#664500"/><path d="M29 49c6 5 16 5 22 0" fill="none" stroke="#66471B" strokeWidth="4" strokeLinecap="round"/><path d="M17 28v-6a5 5 0 0 1 5-5h6M63 28v-6a5 5 0 0 0-5-5h-6M17 52v6a5 5 0 0 0 5 5h6M63 52v6a5 5 0 0 1-5 5h-6" fill="none" stroke="#7472F4" strokeWidth="4" strokeLinecap="round"/></>}
  </svg>;
}

export const IdentityLock = (props: IdentityIconProps) => <IdentityIcon kind="lock" {...props} />;
export const IdentityVerification = (props: IdentityIconProps) => <IdentityIcon kind="verification" {...props} />;
export const IdentityIdCard = (props: IdentityIconProps) => <IdentityIcon kind="id-card" {...props} />;
export const IdentityFaceId = (props: IdentityIconProps) => <IdentityIcon kind="face-id" {...props} />;
