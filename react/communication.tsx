import type { SVGProps } from 'react';

export type CommunicationKind = 'chat' | 'reply' | 'send' | 'voice' | 'notification';
export type CommunicationIconProps = SVGProps<SVGSVGElement> & { size?: number };

const labels: Record<CommunicationKind, string> = {
  chat: 'ItundaFace chat', reply: 'ItundaFace reply', send: 'ItundaFace send', voice: 'ItundaFace voice', notification: 'ItundaFace notification',
};

export function CommunicationIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: CommunicationIconProps & { kind: CommunicationKind }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" role="img" aria-label={ariaLabel ?? labels[kind]} {...props}>
    {kind === 'chat' && <><path d="M12 16c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v27c0 4.4-3.6 8-8 8H38L23 64v-13h-3c-4.4 0-8-3.6-8-8V16Z" fill="#7472F4"/><circle cx="28" cy="30" r="4" fill="#fff"/><circle cx="40" cy="30" r="4" fill="#fff"/><circle cx="52" cy="30" r="4" fill="#fff"/></>}
    {kind === 'reply' && <><path d="M14 18c0-4.4 3.6-8 8-8h36c4.4 0 8 3.6 8 8v25c0 4.4-3.6 8-8 8H34L20 61V51h-2c-2.2 0-4-1.8-4-4V18Z" fill="#7472F4"/><path d="M38 26 26 36l12 10" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></>}
    {kind === 'send' && <path d="m9 38 62-27-19 58-17-24L9 38Z" fill="#7472F4"/><path d="m35 45 36-34-43 25" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>}
    {kind === 'voice' && <><rect x="29" y="10" width="22" height="39" rx="11" fill="#7472F4"/><path d="M20 38c0 12 9 21 20 21s20-9 20-21M40 59v11M30 70h20" fill="none" stroke="#7472F4" strokeWidth="6" strokeLinecap="round"/></>}
    {kind === 'notification' && <><path d="M19 57h42l-5-7V34c0-9-7-16-16-16s-16 7-16 16v16l-5 7Z" fill="#7472F4"/><circle cx="40" cy="65" r="5" fill="#7472F4"/></>}
  </svg>;
}

export const CommunicationChat = (props: CommunicationIconProps) => <CommunicationIcon kind="chat" {...props} />;
export const CommunicationReply = (props: CommunicationIconProps) => <CommunicationIcon kind="reply" {...props} />;
export const CommunicationSend = (props: CommunicationIconProps) => <CommunicationIcon kind="send" {...props} />;
export const CommunicationVoice = (props: CommunicationIconProps) => <CommunicationIcon kind="voice" {...props} />;
export const CommunicationNotification = (props: CommunicationIconProps) => <CommunicationIcon kind="notification" {...props} />;
