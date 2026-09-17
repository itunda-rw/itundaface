import type { SVGProps } from 'react';

export type StateIconProps = SVGProps<SVGSVGElement> & { size?: number };
export type ItundaState = 'success' | 'verified' | 'pending' | 'warning' | 'error' | 'locked' | 'processing' | 'delivered' | 'completed';

type StateSvgProps = StateIconProps & { state: ItundaState };

const brand = '#7472F4';
const brandDark = '#514FC0';
const face = '#FFCC4D';
const faceShadow = '#D98E0A';
const ink = '#664500';
const inkSoft = '#66471B';
const white = '#FFFFFF';
const success = '#287A58';
const successSurface = '#BFEAD7';
const error = '#C72E4C';
const errorSurface = '#F7C4CE';
const warning = '#D98E0A';
const warningSurface = '#FFF0B8';
const neutralSurface = '#EEF0FF';

const labels: Record<ItundaState, string> = {
  success: 'ItundaFace success', verified: 'ItundaFace verified', pending: 'ItundaFace pending', warning: 'ItundaFace warning',
  error: 'ItundaFace error', locked: 'ItundaFace locked', processing: 'ItundaFace processing', delivered: 'ItundaFace delivered', completed: 'ItundaFace completed',
};

export function StateIcon({ state, size = 24, 'aria-label': ariaLabel, ...props }: StateSvgProps) {
  const a = { width: size, height: size, viewBox: '0 0 80 80', role: 'img' as const, 'aria-label': ariaLabel ?? labels[state], ...props };
  if (state === 'success') return <svg {...a}><circle cx="40" cy="40" r="30" fill={success}/><path d="M25 40.5 35 50l20-21" fill="none" stroke={white} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/><path d="M40 10v7" stroke={brand} strokeWidth="3" strokeLinecap="round"/></svg>;
  if (state === 'verified') return <svg {...a}><circle cx="40" cy="40" r="29" fill={brand}/><path d="M40 15 47 21l9-1 3 9 8 4-4 8 4 8-8 4-3 9-9-1-7 6-7-6-9 1-3-9-8-4 4-8-4-8 8-4 3-9 9 1 7-6Z" fill={brandDark}/><path d="M26 40.5 35 49l19-20" fill="none" stroke={white} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (state === 'pending') return <svg {...a}><circle cx="40" cy="40" r="30" fill={face}/><circle cx="40" cy="40" r="18" fill="none" stroke={ink} strokeWidth="5"/><path d="M40 28v13l9 6" fill="none" stroke={ink} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M40 10v7" stroke={brand} strokeWidth="3" strokeLinecap="round"/></svg>;
  if (state === 'warning') return <svg {...a}><path d="M40 10 70 65H10L40 10Z" fill={warning}/><path d="M40 28v19" stroke={ink} strokeWidth="6" strokeLinecap="round"/><circle cx="40" cy="56" r="3.5" fill={ink}/><path d="M40 10v7" stroke={brand} strokeWidth="3" strokeLinecap="round"/></svg>;
  if (state === 'error') return <svg {...a}><circle cx="40" cy="40" r="30" fill={error}/><path d="M29 29l22 22M51 29 29 51" stroke={white} strokeWidth="6" strokeLinecap="round"/><path d="M40 10v7" stroke={brand} strokeWidth="3" strokeLinecap="round"/></svg>;
  if (state === 'locked') return <svg {...a}><rect x="14" y="34" width="52" height="36" rx="10" fill={brand}/><path d="M24 35V27c0-10 7-17 16-17s16 7 16 17v8" fill="none" stroke={brandDark} strokeWidth="7" strokeLinecap="round"/><circle cx="40" cy="51" r="5" fill={white}/><path d="M40 55v7" stroke={white} strokeWidth="4" strokeLinecap="round"/><path d="M17 28v-5a4 4 0 0 1 4-4h5M63 28v-5a4 4 0 0 0-4-4h-5" fill="none" stroke={face} strokeWidth="3" strokeLinecap="round"/></svg>;
  if (state === 'processing') return <svg {...a}><circle cx="40" cy="40" r="28" fill={neutralSurface}/><path d="M40 14a26 26 0 0 1 26 26" fill="none" stroke={brand} strokeWidth="7" strokeLinecap="round"/><path d="M66 40a26 26 0 0 1-26 26" fill="none" stroke={brandDark} strokeWidth="7" strokeLinecap="round"/><circle cx="40" cy="40" r="7" fill={face}/></svg>;
  if (state === 'delivered') return <svg {...a}><path d="M12 24h37l9 10h10v25H12Z" fill={brand}/><path d="M49 24v10h9" fill={brandDark}/><circle cx="28" cy="61" r="6" fill={ink}/><circle cx="59" cy="61" r="6" fill={ink}/><path d="m24 42 5 5 10-11" fill="none" stroke={white} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  return <svg {...a}><circle cx="40" cy="40" r="30" fill={success}/><circle cx="40" cy="40" r="23" fill={successSurface}/><path d="M25 40.5 35 50l20-21" fill="none" stroke={success} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 19l4 4M60 19l-4 4M40 10v5" stroke={brand} strokeWidth="3" strokeLinecap="round"/></svg>;
}

export const StateSuccess = (p: StateIconProps) => <StateIcon {...p} state="success" />;
export const StateVerified = (p: StateIconProps) => <StateIcon {...p} state="verified" />;
export const StatePending = (p: StateIconProps) => <StateIcon {...p} state="pending" />;
export const StateWarning = (p: StateIconProps) => <StateIcon {...p} state="warning" />;
export const StateError = (p: StateIconProps) => <StateIcon {...p} state="error" />;
export const StateLocked = (p: StateIconProps) => <StateIcon {...p} state="locked" />;
export const StateProcessing = (p: StateIconProps) => <StateIcon {...p} state="processing" />;
export const StateDelivered = (p: StateIconProps) => <StateIcon {...p} state="delivered" />;
export const StateCompleted = (p: StateIconProps) => <StateIcon {...p} state="completed" />;
