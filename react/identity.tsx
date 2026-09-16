import type { SVGProps } from 'react';

export type IdentityKind = 'lock' | 'verification' | 'id-card' | 'face-id';
export type IdentityIconProps = SVGProps<SVGSVGElement> & { size?: number };

export function IdentityIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: IdentityIconProps & { kind: IdentityKind }) {
  const label = ariaLabel ?? `ItundaFace ${kind}`;
  return <svg width={size} height={size} viewBox="0 0 80 80" role="img" aria-label={label} {...props}>
    {kind === 'lock' && <><rect x="18" y="34" width="44" height="34" rx="7" fill="#282565"/><path d="M27 35V25a13 13 0 0 1 26 0v10" fill="none" stroke="#7472F4" strokeWidth="7" strokeLinecap="round"/><circle cx="40" cy="50" r="4" fill="#fff"/><path d="M40 54v7" stroke="#fff" strokeWidth="4" strokeLinecap="round"/></>}
    {kind === 'verification' && <><circle cx="40" cy="40" r="27" fill="#7472F4"/><path d="m27 41 9 9 18-20" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/></>}
    {kind === 'id-card' && <><rect x="12" y="20" width="56" height="40" rx="6" fill="#7472F4"/><circle cx="27" cy="38" r="8" fill="#fff"/><path d="M18 53c2-6 16-6 18 0M42 34h17M42 43h13M42 52h9" stroke="#fff" strokeWidth="4" strokeLinecap="round"/></>}
    {kind === 'face-id' && <><path d="M27 14H19a5 5 0 0 0-5 5v8M53 14h8a5 5 0 0 1 5 5v8M14 53v8a5 5 0 0 0 5 5h8M66 53v8a5 5 0 0 1-5 5h-8" fill="none" stroke="#7472F4" strokeWidth="6" strokeLinecap="round"/><circle cx="30" cy="38" r="4" fill="#282565"/><circle cx="50" cy="38" r="4" fill="#282565"/><path d="M30 51c6 5 14 5 20 0" fill="none" stroke="#7472F4" strokeWidth="4" strokeLinecap="round"/></>}
  </svg>;
}

export const IdentityLock = (props: IdentityIconProps) => <IdentityIcon kind="lock" {...props} />;
export const IdentityVerification = (props: IdentityIconProps) => <IdentityIcon kind="verification" {...props} />;
export const IdentityIdCard = (props: IdentityIconProps) => <IdentityIcon kind="id-card" {...props} />;
export const IdentityFaceId = (props: IdentityIconProps) => <IdentityIcon kind="face-id" {...props} />;
