import type { SVGProps } from 'react';

export type StateIconProps = SVGProps<SVGSVGElement> & { size?: number };
export type ItundaState = 'success' | 'verified' | 'pending' | 'warning' | 'error' | 'locked' | 'processing' | 'delivered' | 'completed';

type StateSvgProps = StateIconProps & { state: ItundaState };

const labels: Record<ItundaState, string> = {
  success: 'ItundaFace success', verified: 'ItundaFace verified', pending: 'ItundaFace pending', warning: 'ItundaFace warning',
  error: 'ItundaFace error', locked: 'ItundaFace locked', processing: 'ItundaFace processing', delivered: 'ItundaFace delivered', completed: 'ItundaFace completed',
};

export function StateIcon({ state, size = 24, 'aria-label': ariaLabel, ...props }: StateSvgProps) {
  const a = { width: size, height: size, viewBox: '0 0 80 80', role: 'img' as const, 'aria-label': ariaLabel ?? labels[state], ...props };
  if (state === 'success') return <svg {...a}><circle cx="40" cy="40" r="30" fill="#39B97A"/><path d="M25 40.5 35 50l20-21" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/><path d="M40 10v7" stroke="#7472F4" strokeWidth="3" strokeLinecap="round"/></svg>;
  if (state === 'verified') return <svg {...a}><circle cx="40" cy="40" r="28" fill="#7472F4"/><path d="M40 17 46 22l8-1 3 8 7 4-3 8 3 8-7 4-3 8-8-1-6 5-6-5-8 1-3-8-7-4 3-8-3-8 7-4 3-8 8 1 6-5Z" fill="#8B89FF"/><path d="M26 40.5 35 49l19-20" fill="none" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (state === 'pending') return <svg {...a}><circle cx="40" cy="40" r="30" fill="#FFCC4D"/><circle cx="40" cy="40" r="18" fill="none" stroke="#664500" strokeWidth="5"/><path d="M40 28v13l9 6" fill="none" stroke="#664500" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M40 10v7" stroke="#7472F4" strokeWidth="3" strokeLinecap="round"/></svg>;
  if (state === 'warning') return <svg {...a}><path d="M40 10 70 65H10L40 10Z" fill="#F4B52A"/><path d="M40 28v19" stroke="#664500" strokeWidth="6" strokeLinecap="round"/><circle cx="40" cy="56" r="3.5" fill="#664500"/><path d="M40 10v7" stroke="#7472F4" strokeWidth="3" strokeLinecap="round"/></svg>;
  if (state === 'error') return <svg {...a}><circle cx="40" cy="40" r="30" fill="#E84D5B"/><path d="M29 29l22 22M51 29 29 51" stroke="#fff" strokeWidth="6" strokeLinecap="round"/><path d="M40 10v7" stroke="#7472F4" strokeWidth="3" strokeLinecap="round"/></svg>;
  if (state === 'locked') return <svg {...a}><rect x="17" y="34" width="46" height="34" rx="7" fill="#7472F4"/><path d="M27 35V27c0-8 5.5-14 13-14s13 6 13 14v8" fill="none" stroke="#7675F8" strokeWidth="7" strokeLinecap="round"/><circle cx="40" cy="50" r="5" fill="#fff"/><path d="M40 50v9" stroke="#fff" strokeWidth="4" strokeLinecap="round"/></svg>;
  if (state === 'processing') return <svg {...a}><circle cx="40" cy="40" r="27" fill="#E8E8FF"/><path d="M40 16a24 24 0 0 1 24 24" fill="none" stroke="#7472F4" strokeWidth="7" strokeLinecap="round"/><path d="M64 40a24 24 0 0 1-24 24" fill="none" stroke="#B6B4FF" strokeWidth="7" strokeLinecap="round"/><circle cx="40" cy="40" r="7" fill="#7472F4"/></svg>;
  if (state === 'delivered') return <svg {...a}><path d="M13 24h35l9 10h10v25H13Z" fill="#7472F4"/><path d="M48 24v10h9" fill="#8B89FF"/><circle cx="28" cy="61" r="6" fill="#664500"/><circle cx="59" cy="61" r="6" fill="#664500"/><path d="m24 42 5 5 10-11" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  return <svg {...a}><circle cx="40" cy="40" r="30" fill="#39B97A"/><path d="M25 40.5 35 50l20-21" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 19l4 4M60 19l-4 4M40 10v5" stroke="#7472F4" strokeWidth="3" strokeLinecap="round"/></svg>;
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
