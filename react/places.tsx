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
      <g transform="translate(10 10)" strokeLinecap="round" strokeLinejoin="round">
        {kind === 'agent' && <><circle cx="30" cy="30" r="28" fill={face}/><path d="M19 23h22l3 14c1 5-3 9-8 9H24c-5 0-9-4-8-9z" fill={ink}/><path d="M24 21c0-4 3-7 6-7s6 3 6 7M30 30v7M27 33h6" fill="none" stroke={white} strokeWidth="2.8"/></>}
        {kind === 'atm' && <><circle cx="30" cy="30" r="28" fill={face}/><rect x="17" y="14" width="26" height="34" rx="4" fill={ink}/><rect x="21" y="19" width="18" height="12" rx="2" fill={white}/><path d="M25 25h10" stroke={face} strokeWidth="2.5"/><rect x="21" y="35" width="18" height="3" rx="1.5" fill={face}/><circle cx="34" cy="42" r="1.6" fill={face}/></>}
        {kind === 'bank' && <><circle cx="30" cy="30" r="28" fill={face}/><path d="M14 22l16-10 16 10z" fill={ink}/><path d="M14 25h32M18 29v15M26 29v15M34 29v15M42 29v15M13 47h34" fill="none" stroke={ink} strokeWidth="4"/></>}
        {kind === 'bus-stop' && <><circle cx="30" cy="30" r="28" fill={face}/><rect x="14" y="18" width="32" height="22" rx="5" fill={ink}/><rect x="18" y="22" width="9" height="8" rx="1.5" fill={white}/><rect x="33" y="22" width="9" height="8" rx="1.5" fill={white}/><circle cx="21" cy="43" r="3.4" fill={ink}/><circle cx="39" cy="43" r="3.4" fill={ink}/></>}
        {kind === 'cafe' && <><circle cx="30" cy="30" r="28" fill={face}/><path d="M15 25h26v12c0 6-5 11-11 11h-4c-6 0-11-5-11-11z" fill={ink}/><path d="M41 28h4a6 6 0 0 1 0 12h-4M22 20c0-3 3-3 3-6M30 20c0-3 3-3 3-6" fill="none" stroke={ink} strokeWidth="2.8"/></>}
        {kind === 'gas-station' && <><circle cx="30" cy="30" r="28" fill={face}/><rect x="16" y="15" width="20" height="34" rx="3.5" fill={ink}/><rect x="20" y="20" width="12" height="9" rx="2" fill={white}/><path d="M36 25h3a4 4 0 0 1 4 4v10c0 2 1 3 3 3s3-1 3-3V31l-3-3" fill="none" stroke={ink} strokeWidth="2.7"/></>}
        {kind === 'hospital' && <><circle cx="30" cy="30" r="28" fill={face}/><rect x="14" y="16" width="32" height="34" rx="4" fill={white}/><path d="M30 22v22M19 33h22" fill="none" stroke={ink} strokeWidth="5"/></>}
        {kind === 'hotel' && <><circle cx="30" cy="30" r="28" fill={face}/><path d="M13 45V27a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v5h12a4 4 0 0 1 4 4v9M15 32h30M12 45h36" fill="none" stroke={ink} strokeWidth="4"/><circle cx="43" cy="19" r="4" fill={brand}/><path d="M41.5 19h3" stroke={white} strokeWidth="1.5"/></>}
        {kind === 'market' && <><circle cx="30" cy="30" r="28" fill={face}/><path d="M16 26h28l-4 18c-.5 2.3-2.5 4-5 4H25c-2.5 0-4.5-1.7-5-4z" fill={ink}/><path d="M23 26c0-6 3-10 7-10s7 4 7 10M22 32h16M23 38h14" fill="none" stroke={white} strokeWidth="2.2"/></>}
        {kind === 'pharmacy' && <><circle cx="30" cy="30" r="28" fill={face}/><g transform="rotate(-45 30 30)"><rect x="11" y="22" width="38" height="16" rx="8" fill={white}/><path d="M11 30a8 8 0 0 1 8-8h12v16H19a8 8 0 0 1-8-8z" fill={ink}/><path d="M30 24v12M24 30h12" fill="none" stroke={brand} strokeWidth="2.2"/></g></>}
        {kind === 'restaurant' && <><circle cx="30" cy="30" r="28" fill={face}/><path d="M20 14v12M24 14v12M22 14v30M20 26c0 3.5 4 3.5 4 0M40 14c-6 2-6 8 0 10v20" fill="none" stroke={ink} strokeWidth="3"/></>}
        {kind === 'school' && <><circle cx="30" cy="30" r="28" fill={face}/><path d="M30 14l20 10-20 10-20-10z" fill={ink}/><path d="M20 29v9c0 3.8 4.4 7 10 7s10-3.2 10-7v-9M50 24v13" fill="none" stroke={ink} strokeWidth="2.6"/><path d="M50 37l-3 5h6z" fill={ink}/></>}
        {kind === 'supermarket' && <><circle cx="30" cy="30" r="28" fill={face}/><path d="M15 15h6l5 23h17l4-16H23" fill="none" stroke={ink} strokeWidth="3"/><circle cx="29" cy="45" r="3.5" fill={ink}/><circle cx="42" cy="45" r="3.5" fill={ink}/></>}
        {kind === 'pin' && <path d="M30 58S8 38 8 21a22 22 0 1 1 44 0c0 17-22 37-22 37Zm0-27a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" fill={brand}/>} 
        {kind === 'bike' && <><circle cx="14" cy="44" r="11" fill="none" stroke={brand} strokeWidth="5"/><circle cx="47" cy="44" r="11" fill="none" stroke={brand} strokeWidth="5"/><path d="m14 44 12-22 9 22m-21 0h33M26 22h11l6-8" fill="none" stroke={brand} strokeWidth="5"/></>}
        {kind === 'ebike' && <><circle cx="14" cy="44" r="11" fill="none" stroke={brand} strokeWidth="5"/><circle cx="47" cy="44" r="11" fill="none" stroke={brand} strokeWidth="5"/><path d="m14 44 12-22 9 22m-21 0h33M26 22h11l6-8M33 25l5-8 7 5-8 7" fill="none" stroke={brand} strokeWidth="5"/></>}
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
