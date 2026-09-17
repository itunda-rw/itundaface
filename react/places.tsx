import type { SVGProps } from 'react';

export type PlaceKind = 'agent' | 'atm' | 'bank' | 'bus-stop' | 'cafe' | 'gas-station' | 'hospital' | 'hotel' | 'market' | 'pharmacy' | 'restaurant' | 'school' | 'supermarket' | 'pin' | 'bike' | 'ebike';
export type PlaceIconProps = SVGProps<SVGSVGElement> & { size?: number };

const brand = '#7472F4';
const ink = '#664500';
const face = '#FFCC4D';
const white = '#FFFFFF';

export function PlaceIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: PlaceIconProps & { kind: PlaceKind }) {
  const label = ariaLabel ?? `ItundaFace ${kind}`;
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" role="img" aria-label={label} {...props}>
      <g strokeLinecap="round" strokeLinejoin="round">
        {kind === 'agent' && <><circle cx="40" cy="40" r="29" fill={face}/><path d="M25 27h30l-4 23c-.7 4.5-4.5 7.8-9 7.8H38c-4.5 0-8.3-3.3-9-7.8Z" fill={ink}/><path d="M33 27c0-5 3-8 7-8s7 3 7 8M40 36v11M36 41.5h8" fill="none" stroke={white} strokeWidth="3"/><path d="m49 24 5-3" fill="none" stroke={brand} strokeWidth="3"/></>}
        {kind === 'atm' && <><rect x="20" y="11" width="40" height="58" rx="7" fill={ink}/><rect x="26" y="19" width="28" height="19" rx="3" fill={face}/><path d="M31 46h18M31 54h12" stroke={white} strokeWidth="3.5"/><circle cx="50" cy="54" r="2" fill={brand}/></>}
        {kind === 'bank' && <><path d="M12 28 40 12l28 16H12Z" fill={ink}/><path d="M17 32h46M21 35v23M32 35v23M48 35v23M59 35v23M13 62h54" fill="none" stroke={ink} strokeWidth="5"/><path d="m51 20 6-3" fill="none" stroke={brand} strokeWidth="3"/></>}
        {kind === 'bus-stop' && <><path d="M18 17h44v34H18z" fill={ink}/><rect x="24" y="23" width="13" height="12" rx="2" fill={face}/><rect x="43" y="23" width="13" height="12" rx="2" fill={face}/><path d="M24 43h32M28 55v7M52 55v7" stroke={ink} strokeWidth="5"/><circle cx="29" cy="53" r="4" fill={brand}/><circle cx="51" cy="53" r="4" fill={brand}/></>}
        {kind === 'cafe' && <><path d="M18 29h37v15c0 8-6 14-14 14H32c-8 0-14-6-14-14Z" fill={ink}/><path d="M55 33h4c6 0 8 12 0 12h-4M26 23h22" fill="none" stroke={ink} strokeWidth="4"/><path d="M30 19c0-4 4-4 4-8M41 19c0-4 4-4 4-8" fill="none" stroke={brand} strokeWidth="3.5"/></>}
        {kind === 'gas-station' && <><rect x="17" y="14" width="29" height="53" rx="4" fill={ink}/><rect x="23" y="21" width="17" height="13" rx="2" fill={face}/><path d="M46 28h5c5 0 8 3 8 8v14c0 3 2 5 4 5s4-2 4-5V39l-6-6" fill="none" stroke={ink} strokeWidth="4"/><path d="M27 28h9" stroke={brand} strokeWidth="3"/></>}
        {kind === 'hospital' && <><rect x="14" y="15" width="52" height="51" rx="6" fill={white}/><path d="M40 23v35M23 40.5h34" stroke={ink} strokeWidth="8"/><path d="M40 15v51" stroke={brand} strokeWidth="3" opacity=".9"/></>}
        {kind === 'hotel' && <><path d="M15 61V31c0-5 4-9 9-9h10c5 0 9 4 9 9v7h13c5 0 9 4 9 9v14M17 42h48M13 61h54" fill="none" stroke={ink} strokeWidth="5"/><circle cx="52" cy="25" r="5" fill={brand}/><path d="M50 25h4" stroke={white} strokeWidth="2"/></>}
        {kind === 'market' && <><path d="M18 30h44l-5 29c-.5 3-3 5-6 5H29c-3 0-5.5-2-6-5Z" fill={ink}/><path d="M27 30c0-7 5-12 13-12s13 5 13 12M25 38h30M27 47h26" fill="none" stroke={white} strokeWidth="3"/><path d="m49 23 6-3" stroke={brand} strokeWidth="3"/></>}
        {kind === 'pharmacy' && <><g transform="rotate(-45 40 40)"><rect x="12" y="28" width="56" height="24" rx="12" fill={white}/><path d="M12 40c0-7 5-12 12-12h16v24H24c-7 0-12-5-12-12Z" fill={ink}/><path d="M40 31v18M31 40h18" stroke={brand} strokeWidth="4"/></g></>}
        {kind === 'restaurant' && <><path d="M24 15v18M29 15v18M26.5 15v43M24 29c0 4 5 4 5 0M50 15c-8 3-8 10 0 13v30" fill="none" stroke={ink} strokeWidth="4"/><path d="m48 22 6-5" stroke={brand} strokeWidth="3"/></>}
        {kind === 'school' && <><path d="M10 28 40 12l30 16-30 16Z" fill={ink}/><path d="M20 35v14c0 7 9 12 20 12s20-5 20-12V35M70 28v20" fill="none" stroke={ink} strokeWidth="4"/><circle cx="58" cy="22" r="5" fill={brand}/></>}
        {kind === 'supermarket' && <><path d="M15 17h9l7 34h27l6-25H27" fill="none" stroke={ink} strokeWidth="5"/><circle cx="35" cy="62" r="5" fill={ink}/><circle cx="56" cy="62" r="5" fill={ink}/><path d="M34 34h22" stroke={brand} strokeWidth="4"/></>}
        {kind === 'pin' && <path d="M40 68S14 44 14 25a26 26 0 1 1 52 0c0 19-26 43-26 43Zm0-32a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" fill={brand}/>} 
        {kind === 'bike' && <><circle cx="18" cy="55" r="11" fill="none" stroke={brand} strokeWidth="5"/><circle cx="59" cy="55" r="11" fill="none" stroke={brand} strokeWidth="5"/><path d="m18 55 13-25 12 25m-25 0h41M31 30h12l6-8" fill="none" stroke={brand} strokeWidth="5"/></>}
        {kind === 'ebike' && <><circle cx="18" cy="55" r="11" fill="none" stroke={brand} strokeWidth="5"/><circle cx="59" cy="55" r="11" fill="none" stroke={brand} strokeWidth="5"/><path d="m18 55 13-25 12 25m-25 0h41M31 30h12l6-8" fill="none" stroke={brand} strokeWidth="5"/><path d="m44 31 8-10 8 6-10 10" fill="none" stroke={face} strokeWidth="4"/></>}
      </g>
    </svg>
  );
}

export const PlaceAgent = (props: PlaceIconProps) => <PlaceIcon kind="agent" {...props}/>;
export const PlaceAtm = (props: PlaceIconProps) => <PlaceIcon kind="atm" {...props}/>;
export const PlaceBank = (props: PlaceIconProps) => <PlaceIcon kind="bank" {...props}/>;
export const PlaceBusStop = (props: PlaceIconProps) => <PlaceIcon kind="bus-stop" {...props}/>;
export const PlaceCafe = (props: PlaceIconProps) => <PlaceIcon kind="cafe" {...props}/>;
export const PlaceGasStation = (props: PlaceIconProps) => <PlaceIcon kind="gas-station" {...props}/>;
export const PlaceHospital = (props: PlaceIconProps) => <PlaceIcon kind="hospital" {...props}/>;
export const PlaceHotel = (props: PlaceIconProps) => <PlaceIcon kind="hotel" {...props}/>;
export const PlaceMarket = (props: PlaceIconProps) => <PlaceIcon kind="market" {...props}/>;
export const PlacePharmacy = (props: PlaceIconProps) => <PlaceIcon kind="pharmacy" {...props}/>;
export const PlaceRestaurant = (props: PlaceIconProps) => <PlaceIcon kind="restaurant" {...props}/>;
export const PlaceSchool = (props: PlaceIconProps) => <PlaceIcon kind="school" {...props}/>;
export const PlaceSupermarket = (props: PlaceIconProps) => <PlaceIcon kind="supermarket" {...props}/>;
export const PlacePin = (props: PlaceIconProps) => <PlaceIcon kind="pin" {...props}/>;
export const PlaceBike = (props: PlaceIconProps) => <PlaceIcon kind="bike" {...props}/>;
export const PlaceEbike = (props: PlaceIconProps) => <PlaceIcon kind="ebike" {...props}/>;
