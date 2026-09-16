import type { SVGProps } from 'react';

export type CommunicationKind = 'chat' | 'reply' | 'send' | 'voice' | 'notification';
export type CommunicationIconProps = SVGProps<SVGSVGElement> & { size?: number };

const labels: Record<CommunicationKind, string> = {
  chat: 'ItundaFace chat', reply: 'ItundaFace reply', send: 'ItundaFace send', voice: 'ItundaFace voice', notification: 'ItundaFace notification',
};

export function CommunicationIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: CommunicationIconProps & { kind: CommunicationKind }) {
  const a = { width: size, height: size, viewBox: '0 0 80 80', role: 'img' as const, 'aria-label': ariaLabel ?? labels[kind], ...props };
  if (kind === 'chat') return <svg {...a}><path d="M40 10C22.9 10 9 20.7 9 34C9 41.8 14.2 48.8 22.2 53C22 59.2 19.7 63.4 16.5 67.2C23 66.4 29 63.6 33.1 59.1C35.3 59.7 37.6 60 40 60C57.1 60 71 49.3 71 36C71 22.7 57.1 10 40 10Z" fill="#7472F4"/><circle cx="29" cy="35" r="3.1" fill="#FFFFFF"/><circle cx="40" cy="35" r="3.1" fill="#FFFFFF"/><circle cx="51" cy="35" r="3.1" fill="#FFFFFF"/></svg>;
  if (kind === 'reply') return <svg {...a}><path d="M15 38C15 23.6 27.2 13 42.6 13H65C68.3 13 71 15.7 71 19V48C71 51.3 68.3 54 65 54H42.6C37.5 54 33.1 55.2 29.2 57.7L19.2 64.1C16.8 65.6 14 63.8 14.5 61L16.5 51.4C15.5 47.3 15 42.8 15 38Z" fill="#7472F4"/><path d="M34 37H54M34 37L43 29M34 37L43 45" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (kind === 'send') return <svg {...a}><path d="M12 38.2L67.5 11.5C70.2 10.2 72.8 12.8 71.5 15.5L44.8 71C43.5 73.7 39.5 73.1 39 70.2L34.5 47.5L12 43C9.1 42.5 8.5 39.5 12 38.2Z" fill="#7472F4"/><path d="M14.5 40.5L62 18M35.5 46L62 18" stroke="#FFFFFF" strokeWidth="4.2" strokeLinecap="round"/></svg>;
  if (kind === 'voice') return <svg {...a}><rect x="29" y="11" width="22" height="40" rx="11" fill="#7472F4"/><path d="M20 39C20 51.2 28.9 60 40 60C51.1 60 60 51.2 60 39M40 60V70M31 70H49" fill="none" stroke="#7472F4" strokeWidth="6" strokeLinecap="round"/></svg>;
  return <svg {...a}><path d="M40 10C33.9 10 29 14.9 29 21V25.1C23.3 28.5 20 34.6 20 41.5V55L14 63C12.1 65.5 13.9 69 17 69H63C66.1 69 67.9 65.5 66 63L60 55V41.5C60 34.6 56.7 28.5 51 25.1V21C51 14.9 46.1 10 40 10Z" fill="#7472F4"/><path d="M31 70C31.8 74.2 35.3 77 40 77C44.7 77 48.2 74.2 49 70" fill="none" stroke="#66471B" strokeWidth="4.5" strokeLinecap="round"/><circle cx="58" cy="18" r="7" fill="#EF4A63"/></svg>;
}

export const CommunicationChat = (p: CommunicationIconProps) => <CommunicationIcon {...p} kind="chat" />;
export const CommunicationReply = (p: CommunicationIconProps) => <CommunicationIcon {...p} kind="reply" />;
export const CommunicationSend = (p: CommunicationIconProps) => <CommunicationIcon {...p} kind="send" />;
export const CommunicationVoice = (p: CommunicationIconProps) => <CommunicationIcon {...p} kind="voice" />;
export const CommunicationNotification = (p: CommunicationIconProps) => <CommunicationIcon {...p} kind="notification" />;
