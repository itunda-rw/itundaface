import type { SVGProps } from 'react';

export type FinanceIconProps = SVGProps<SVGSVGElement> & { size?: number };
export type FinanceKind = 'mobile-money' | 'wallet' | 'bill-payment' | 'airtime' | 'merchant-payment' | 'transport-payment' | 'interoperable-payment' | 'government-payment' | 'send' | 'receive' | 'cash-in' | 'cash-out' | 'qr-payment' | 'refund' | 'receipt' | 'transaction-history';

const labels: Record<FinanceKind, string> = {
  'mobile-money': 'ItundaFace mobile money', wallet: 'ItundaFace wallet', 'bill-payment': 'ItundaFace bill payment', airtime: 'ItundaFace airtime',
  'merchant-payment': 'ItundaFace merchant payment', 'transport-payment': 'ItundaFace transport payment', 'interoperable-payment': 'ItundaFace interoperable payment', 'government-payment': 'ItundaFace government service payment',
  send: 'ItundaFace send money', receive: 'ItundaFace receive money', 'cash-in': 'ItundaFace cash in', 'cash-out': 'ItundaFace cash out',
  'qr-payment': 'ItundaFace QR payment', refund: 'ItundaFace refund', receipt: 'ItundaFace receipt', 'transaction-history': 'ItundaFace transaction history',
};

export function FinanceIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: FinanceIconProps & { kind: FinanceKind }) {
  const a = { width: size, height: size, viewBox: '0 0 80 80', role: 'img' as const, 'aria-label': ariaLabel ?? labels[kind], ...props };
  if (kind === 'mobile-money') return <svg {...a}><rect x="21" y="10" width="38" height="60" rx="8" fill="#7472F4"/><rect x="26" y="17" width="28" height="42" rx="4" fill="#F0EFFF"/><path d="M34 27h12M34 35h12M34 43h7" stroke="#7472F4" strokeWidth="3" strokeLinecap="round"/><circle cx="40" cy="64" r="2.5" fill="#F0EFFF"/></svg>;
  if (kind === 'wallet') return <svg {...a}><path d="M12 24c0-4 3-7 7-7h40c5 0 9 4 9 9v32c0 4-3 7-7 7H19c-4 0-7-3-7-7V24Z" fill="#7472F4"/><path d="M18 28h48v28H18c-3 0-5-2-5-5V33c0-3 2-5 5-5Z" fill="#F0EFFF"/><path d="M50 35h16v12H50c-4 0-7-3-7-6s3-6 7-6Z" fill="#8B89FF"/><circle cx="52" cy="41" r="2" fill="#fff"/></svg>;
  if (kind === 'bill-payment') return <svg {...a}><path d="M20 10h40v60l-7-5-7 5-6-5-6 5-7-5-7 5V10Z" fill="#F0EFFF" stroke="#7472F4" strokeWidth="4" strokeLinejoin="round"/><path d="M29 25h22M29 35h22M29 45h14" stroke="#7472F4" strokeWidth="4" strokeLinecap="round"/><circle cx="52" cy="51" r="7" fill="#39B97A"/><path d="m48.5 51 2.5 2.5 4.5-5" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (kind === 'airtime') return <svg {...a}><path d="M24 13h32c4 0 7 3 7 7v40c0 4-3 7-7 7H24c-4 0-7-3-7-7V20c0-4 3-7 7-7Z" fill="#7472F4"/><rect x="23" y="21" width="34" height="30" rx="4" fill="#F0EFFF"/><path d="M31 36h18M40 27v18" stroke="#39B97A" strokeWidth="5" strokeLinecap="round"/><circle cx="40" cy="59" r="2.5" fill="#F0EFFF"/></svg>;
  if (kind === 'merchant-payment') return <svg {...a}><path d="M16 30h48l-4-13H20l-4 13Z" fill="#7472F4"/><path d="M18 30v28c0 4 3 7 7 7h30c4 0 7-3 7-7V30" fill="#F0EFFF" stroke="#7472F4" strokeWidth="4"/><path d="M28 48h24" stroke="#7472F4" strokeWidth="4" strokeLinecap="round"/><circle cx="40" cy="48" r="8" fill="#39B97A"/><path d="m36 48 3 3 6-7" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (kind === 'transport-payment') return <svg {...a}><path d="M19 58V28c0-8 8-13 21-13s21 5 21 13v30" fill="#7472F4"/><rect x="25" y="28" width="30" height="20" rx="4" fill="#F0EFFF"/><circle cx="27" cy="57" r="5" fill="#8B89FF"/><circle cx="53" cy="57" r="5" fill="#8B89FF"/><path d="M31 38h18" stroke="#39B97A" strokeWidth="4" strokeLinecap="round"/><path d="M40 31v13" stroke="#39B97A" strokeWidth="3" strokeLinecap="round"/></svg>;
  if (kind === 'interoperable-payment') return <svg {...a}><circle cx="27" cy="40" r="16" fill="#7472F4"/><circle cx="53" cy="40" r="16" fill="#39B97A"/><path d="M27 31c8 0 13 4 16 9M53 49c-8 0-13-4-16-9" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round"/><path d="m42 34 3 6-6 3M38 46l-3-6 6-3" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (kind === 'government-payment') return <svg {...a}><path d="M15 29h50L40 15 15 29Z" fill="#7472F4"/><path d="M20 34h40v25H20z" fill="#F0EFFF" stroke="#7472F4" strokeWidth="4"/><path d="M28 38v17M40 38v17M52 38v17" stroke="#7472F4" strokeWidth="4" strokeLinecap="round"/><path d="M14 63h52" stroke="#39B97A" strokeWidth="5" strokeLinecap="round"/></svg>;
  if (kind === 'send') return <svg {...a}><path d="M10 39 68 12 47 68 36 45Z" fill="#7472F4"/><path d="m36 45 32-33-21 56Z" fill="#514FC0"/><path d="M36 45 68 12" stroke="#F0EFFF" strokeWidth="4" strokeLinecap="round"/><path d="m18 37 18 8" stroke="#9290FF" strokeWidth="4" strokeLinecap="round"/></svg>;
  if (kind === 'receive') return <svg {...a}><path d="M40 10v46" stroke="#7472F4" strokeWidth="9" strokeLinecap="round"/><path d="m22 40 18 18 18-18" fill="none" stroke="#7472F4" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/><rect x="18" y="61" width="44" height="8" rx="4" fill="#9290FF"/></svg>;
  if (kind === 'cash-in') return <svg {...a}><rect x="12" y="24" width="56" height="38" rx="7" fill="#BFEAD7"/><circle cx="40" cy="43" r="11" fill="#7472F4"/><path d="M40 36v14m-6-8 6 8 6-8" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M40 11v14" stroke="#7472F4" strokeWidth="7" strokeLinecap="round"/></svg>;
  if (kind === 'cash-out') return <svg {...a}><rect x="12" y="24" width="56" height="38" rx="7" fill="#BFEAD7"/><circle cx="40" cy="43" r="11" fill="#7472F4"/><path d="M40 50V36m-6 6 6-6 6 6" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M40 62v10" stroke="#7472F4" strokeWidth="7" strokeLinecap="round"/></svg>;
  if (kind === 'qr-payment') return <svg {...a}><rect x="10" y="10" width="60" height="60" rx="10" fill="#C0C6FF"/><path d="M20 20h18v18H20zM44 20h16v16H44zM20 44h16v16H20z" fill="#282565"/><path d="M44 44h7v7h-7zM54 44h6v16h-6zM44 54h7v6h-7z" fill="#7472F4"/><path d="M25 25h8v8h-8zM49 25h6v6h-6zM25 49h6v6h-6z" fill="#FFFFFF"/></svg>;
  if (kind === 'refund') return <svg {...a}><path d="M63 25a27 27 0 0 0-45 8" fill="none" stroke="#7472F4" strokeWidth="8" strokeLinecap="round"/><path d="m18 18-2 16 16-3" fill="none" stroke="#7472F4" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="40" cy="47" r="17" fill="#BFEAD7"/><path d="M47 47H33m0 0 6-6m-6 6 6 6" fill="none" stroke="#287A58" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (kind === 'receipt') return <svg {...a}><path d="M19 10h42v60l-7-5-7 5-7-5-7 5-7-5-7 5Z" fill="#F0EFFF" stroke="#7472F4" strokeWidth="5" strokeLinejoin="round"/><path d="M29 25h22M29 34h16M29 43h22M29 52h11" stroke="#7472F4" strokeWidth="4" strokeLinecap="round"/></svg>;
  return <svg {...a}><circle cx="40" cy="40" r="28" fill="#F0EFFF" stroke="#7472F4" strokeWidth="6"/><path d="M40 24v17l11 7" fill="none" stroke="#7472F4" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 31 12 39l7 8" fill="none" stroke="#9290FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export const FinanceMobileMoney = (p: FinanceIconProps) => <FinanceIcon {...p} kind="mobile-money" />;
export const FinanceWallet = (p: FinanceIconProps) => <FinanceIcon {...p} kind="wallet" />;
export const FinanceBillPayment = (p: FinanceIconProps) => <FinanceIcon {...p} kind="bill-payment" />;
export const FinanceAirtime = (p: FinanceIconProps) => <FinanceIcon {...p} kind="airtime" />;
export const FinanceMerchantPayment = (p: FinanceIconProps) => <FinanceIcon {...p} kind="merchant-payment" />;
export const FinanceTransportPayment = (p: FinanceIconProps) => <FinanceIcon {...p} kind="transport-payment" />;
export const FinanceInteroperablePayment = (p: FinanceIconProps) => <FinanceIcon {...p} kind="interoperable-payment" />;
export const FinanceGovernmentPayment = (p: FinanceIconProps) => <FinanceIcon {...p} kind="government-payment" />;
export const FinanceSend = (p: FinanceIconProps) => <FinanceIcon {...p} kind="send" />;
export const FinanceReceive = (p: FinanceIconProps) => <FinanceIcon {...p} kind="receive" />;
export const FinanceCashIn = (p: FinanceIconProps) => <FinanceIcon {...p} kind="cash-in" />;
export const FinanceCashOut = (p: FinanceIconProps) => <FinanceIcon {...p} kind="cash-out" />;
export const FinanceQrPayment = (p: FinanceIconProps) => <FinanceIcon {...p} kind="qr-payment" />;
export const FinanceRefund = (p: FinanceIconProps) => <FinanceIcon {...p} kind="refund" />;
export const FinanceReceipt = (p: FinanceIconProps) => <FinanceIcon {...p} kind="receipt" />;
export const FinanceTransactionHistory = (p: FinanceIconProps) => <FinanceIcon {...p} kind="transaction-history" />;
