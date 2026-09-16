import type { SVGProps } from 'react';

export type StateIconProps = SVGProps<SVGSVGElement> & { size?: number };
export type ItundaState = 'success' | 'verified' | 'pending' | 'warning' | 'error' | 'locked' | 'processing' | 'delivered' | 'completed';

const marks: Record<ItundaState, [string, string]> = {
  success: ['#25A36F', '✓'], verified: ['#25A36F', '✓'], pending: ['#F0B429', '…'], warning: ['#F0B429', '!'], error: ['#E0455C', '×'], locked: ['#514FC0', '•'], processing: ['#7472F4', '…'], delivered: ['#25A36F', '✓'], completed: ['#25A36F', '✓'],
};

export function StateIcon({ state, size = 24, 'aria-label': ariaLabel, ...props }: StateIconProps & { state: ItundaState }) {
  const [fill, mark] = marks[state];
  return <svg width={size} height={size} viewBox="0 0 80 80" role="img" aria-label={ariaLabel ?? `ItundaFace ${state}`} {...props}>
    <circle cx="40" cy="40" r="30" fill={fill} />
    <text x="40" y="51" textAnchor="middle" fontSize="30" fontWeight="700" fontFamily="sans-serif" fill="#fff">{mark}</text>
  </svg>;
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
