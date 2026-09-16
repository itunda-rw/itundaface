# React API

The React package exposes typed, accessible components for ItundaFace families. Canonical SVG artwork remains under `svg/`; React components preserve the same semantic names and token vocabulary.

## Finance

Use `FinanceIcon` with `kind` values: `send`, `receive`, `cash-in`, `cash-out`, `qr-payment`, `refund`, `receipt`, `transaction-history`.

Named helpers are also available: `FinanceSend`, `FinanceReceive`, `FinanceCashIn`, `FinanceCashOut`, `FinanceQrPayment`, `FinanceRefund`, `FinanceReceipt`, `FinanceTransactionHistory`.

## State

Use `StateIcon` with `success`, `verified`, `pending`, `warning`, `error`, `locked`, `processing`, `delivered`, or `completed`.

All components accept `size`, standard SVG props, and optional accessible titles. Prefer the canonical SVG files when a product does not use React.
