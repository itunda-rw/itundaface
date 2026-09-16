import type { SVGProps } from 'react';

export type PlaceKind = 'agent' | 'atm' | 'bank' | 'bus-stop' | 'cafe' | 'gas-station' | 'hospital' | 'hotel' | 'market' | 'pharmacy' | 'restaurant' | 'school' | 'supermarket' | 'pin' | 'bike' | 'ebike';
export type PlaceIconProps = SVGProps<SVGSVGElement> & { size?: number };

export function PlaceIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: PlaceIconProps & { kind: PlaceKind }) {
  const label = ariaLabel ?? `ItundaFace ${kind}`;
  return <svg width={size} height={size} viewBox="0 0 80 80" role="img" aria-label={label} {...props}>
    <circle cx="40" cy="40" r="34" fill="#7472F4" opacity=".14"/>
    {kind === 'pin' && <path d="M40 70S18 50 18 33a22 22 0 1 1 44 0c0 17-22 37-22 37Zm0-27a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" fill="#7472F4"/>}
    {kind === 'atm' && <><rect x="20" y="14" width="40" height="52" rx="6" fill="#282565"/><rect x="27" y="22" width="26" height="15" rx="2" fill="#7c7bfd"/><rect x="27" y="44" width="26" height="4" rx="2" fill="#7c7bfd"/><circle cx="48" cy="56" r="2" fill="#7c7bfd"/></>}
    {kind === 'bank' && <><path d="m14 30 26-17 26 17H14Z" fill="#7472F4"/><path d="M20 34h7v22h-7zm13 0h7v22h-7zm13 0h7v22h-7z" fill="#7472F4"/><rect x="13" y="58" width="54" height="7" rx="3" fill="#282565"/></>}
    {kind === 'restaurant' && <><path d="M23 17v23M18 17v11M28 17v11M23 40v24" stroke="#7472F4" strokeWidth="5" strokeLinecap="round"/><path d="M54 17v47M54 17c8 5 8 15 0 20" fill="none" stroke="#7472F4" strokeWidth="5" strokeLinecap="round"/></>}
    {kind === 'cafe' && <><path d="M20 27h35v23c0 9-7 15-17 15s-18-6-18-15V27Z" fill="#7472F4"/><path d="M55 33h5a9 9 0 0 1 0 18h-5" fill="none" stroke="#7472F4" strokeWidth="6"/><path d="M27 18c-3-5 5-6 2-11M40 18c-3-5 5-6 2-11" fill="none" stroke="#7472F4" strokeWidth="4" strokeLinecap="round"/></>}
    {kind === 'hospital' && <><rect x="17" y="17" width="46" height="46" rx="7" fill="#7472F4"/><path d="M40 25v30M25 40h30" stroke="#fff" strokeWidth="7" strokeLinecap="round"/></>}
    {kind === 'pharmacy' && <><circle cx="40" cy="40" r="25" fill="#7472F4"/><path d="m29 51 22-22M34 28h12a8 8 0 0 1 0 16H34a8 8 0 0 1 0-16Z" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round"/></>}
    {kind === 'hotel' && <><path d="M18 57V25c0-5 4-9 9-9s9 4 9 9v32M36 37h18c5 0 8 4 8 9v11M18 58h44" fill="none" stroke="#7472F4" strokeWidth="6" strokeLinecap="round"/><circle cx="27" cy="28" r="4" fill="#7472F4"/></>}
    {kind === 'market' && <><path d="M16 31h48l-5 31H21l-5-31Z" fill="#7472F4"/><path d="M13 31h54l-6-15H19l-6 15Z" fill="#282565"/><path d="M25 16v15M40 16v15M55 16v15" stroke="#fff" strokeWidth="3"/></>}
    {kind === 'supermarket' && <><path d="M18 20h8l5 32h29l6-23H28" fill="none" stroke="#7472F4" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="35" cy="61" r="5" fill="#7472F4"/><circle cx="56" cy="61" r="5" fill="#7472F4"/></>}
    {kind === 'gas-station' && <><path d="M21 63V20h28v43" fill="none" stroke="#7472F4" strokeWidth="6"/><rect x="27" y="27" width="16" height="13" rx="2" fill="#7472F4"/><path d="M49 28h8l6 8v27M58 28v10h5" fill="none" stroke="#7472F4" strokeWidth="5" strokeLinecap="round"/></>}
    {kind === 'school' && <><path d="m15 32 25-18 25 18-25 18-25-18Z" fill="#7472F4"/><path d="M24 38v18h32V38M32 48h16" fill="none" stroke="#7472F4" strokeWidth="6" strokeLinecap="round"/></>}
    {kind === 'bus-stop' && <><rect x="24" y="18" width="32" height="43" rx="6" fill="#7472F4"/><path d="M30 27h20v14H30zM30 48h7M43 48h7" fill="none" stroke="#fff" strokeWidth="4"/><path d="M18 63h44" stroke="#282565" strokeWidth="6" strokeLinecap="round"/></>}
    {kind === 'agent' && <><circle cx="40" cy="29" r="12" fill="#7472F4"/><path d="M18 62c2-15 10-22 22-22s20 7 22 22" fill="#7472F4"/></>}
    {kind === 'bike' && <><circle cx="24" cy="54" r="11" fill="none" stroke="#7472F4" strokeWidth="5"/><circle cx="57" cy="54" r="11" fill="none" stroke="#7472F4" strokeWidth="5"/><path d="m24 54 12-22 9 22m-21 0h33M36 32h11l6-8" fill="none" stroke="#7472F4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></>}
    {kind === 'ebike' && <><circle cx="24" cy="54" r="11" fill="none" stroke="#7472F4" strokeWidth="5"/><circle cx="57" cy="54" r="11" fill="none" stroke="#7472F4" strokeWidth="5"/><path d="m24 54 12-22 9 22m-21 0h33M36 32h11l6-8M43 35l5-8 7 5-8 7" fill="none" stroke="#7472F4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></>}
  </svg>;
}
