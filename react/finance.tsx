import type { SVGProps } from 'react';

export type FinanceIconProps = SVGProps<SVGSVGElement> & { size?: number };
export type FinanceKind = 'send' | 'receive' | 'cash-in' | 'cash-out' | 'qr-payment' | 'refund' | 'receipt' | 'transaction-history';

const labels: Record<FinanceKind, string> = {
  send: 'ItundaFace send money', receive: 'ItundaFace receive money', 'cash-in': 'ItundaFace cash in', 'cash-out': 'ItundaFace cash out',
  'qr-payment': 'ItundaFace QR payment', refund: 'ItundaFace refund', receipt: 'ItundaFace receipt', 'transaction-history': 'ItundaFace transaction history',
};

export function FinanceIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: FinanceIconProps & { kind: FinanceKind }) {
  const a = { width: size, height: size, viewBox: '0 0 80 80', role: 'img' as const, 'aria-label': ariaLabel ?? labels[kind], ...props };
  if (kind === 'send') return <svg {...a}><path d="M10 39 68 12 47 68 36 45Z" fill="#7472F4"/><path d="M36 45 68 12" stroke="#fff" strokeWidth="4" strokeLinecap="round"/></svg>;
  if (kind === 'receive') return <svg {...a}><path d="M40 10v46M22 40l18 18 18-18" fill="none" stroke="#7472F4" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (kind === 'cash-in' || kind === 'cash-out') { const down = kind === 'cash-in'; return <svg {...a}><rect x="12" y="24" width="56" height="38" rx="7" fill="#BFEAD7"/><circle cx="40" cy="43" r="11" fill="#7472F4"/><path d={down ? 'M40 36v14m-6-8 6 8 6-8' : 'M40 50V36m-6 6 6-6 6 6'} fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
  if (kind === 'qr-payment') return <svg {...a}><rect x="10" y="10" width="60" height="60" rx="8" fill="#7472F4"/><path d="M20 20h16v16H20zm28 0h12v16H48zM20 48h16v12H20zm28-4h8v8h-8zM40 44v16h20" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round"/></svg>;
  if (kind === 'refund') return <svg {...a}><path d="M18 30a23 23 0 1 1 4 26" fill="none" stroke="#7472F4" strokeWidth="8" strokeLinecap="round"/><path d="m10 30 10-12 10 12" fill="none" stroke="#7472F4" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="42" cy="39" r="10" fill="#BFEAD7"/></svg>;
  if (kind === 'receipt') return <svg {...a}><path d="M19 10h42v60l-7-5-7 5-7-5-7 5-7-5-7 5z" fill="#7472F4"/><path d="M29 27h22M29 37h22M29 47h14" stroke="#fff" strokeWidth="4" strokeLinecap="round"/></svg>;
  return <svg {...a}><rect x="15" y="12" width="50" height="56" rx="7" fill="#C0C6FF"/><path d="M27 27h26M27 39h26M27 51h18" stroke="#282565" strokeWidth="4" strokeLinecap="round"/><circle cx="54" cy="53" r="7" fill="#7472F4"/></svg>;
}

export const FinanceSend = (p: FinanceIconProps) => <FinanceIcon {...p} kind="send" />;
export const FinanceReceive = (p: FinanceIconProps) => <FinanceIcon {...p} kind="receive" />;
export const FinanceCashIn = (p: FinanceIconProps) => <FinanceIcon {...p} kind="cash-in" />;
export const FinanceCashOut = (p: FinanceIconProps) => <FinanceIcon {...p} kind="cash-out" />;
export const FinanceQrPayment = (p: FinanceIconProps) => <FinanceIcon {...p} kind="qr-payment" />;
export const FinanceRefund = (p: FinanceIconProps) => <FinanceIcon {...p} kind="refund" />;
export const FinanceReceipt = (p: FinanceIconProps) => <FinanceIcon {...p} kind="receipt" />;
export const FinanceTransactionHistory = (p: FinanceIconProps) => <FinanceIcon {...p} kind="transaction-history" />;
