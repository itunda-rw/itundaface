import type { SVGProps } from 'react';

export type CommunicationKind = 'chat' | 'reply' | 'send' | 'voice' | 'notification';
export type CommunicationIconProps = SVGProps<SVGSVGElement> & { size?: number };

const brand = '#7472F4';
const brandDark = '#514FC0';
const face = '#FFCC4D';
const ink = '#664500';
const inkSoft = '#66471B';
const white = '#FFFFFF';
const heart = '#EF4A63';

const labels: Record<CommunicationKind, string> = {
  chat: 'ItundaFace chat',
  reply: 'ItundaFace reply',
  send: 'ItundaFace send',
  voice: 'ItundaFace voice',
  notification: 'ItundaFace notification',
};

export function CommunicationIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: CommunicationIconProps & { kind: CommunicationKind }) {
  const a = { width: size, height: size, viewBox: '0 0 80 80', role: 'img' as const, 'aria-label': ariaLabel ?? labels[kind], ...props };
  if (kind === 'chat') return <svg {...a}><path d="M40 10C22.9 10 9 20.7 9 34c0 7.8 5.2 14.8 13.2 19C22 59.2 19.7 63.4 16.5 67.2 23 66.4 29 63.6 33.1 59.1 35.3 59.7 37.6 60 40 60c17.1 0 31-10.7 31-24S57.1 10 40 10Z" fill={brand}/><circle cx="29" cy="35" r="3.1" fill={white}/><circle cx="40" cy="35" r="3.1" fill={white}/><circle cx="51" cy="35" r="3.1" fill={white}/></svg>;
  if (kind === 'reply') return <svg {...a}><path d="M15 38C15 23.6 27.2 13 42.6 13H65c3.3 0 6 2.7 6 6v29c0 3.3-2.7 6-6 6H42.6c-5.1 0-9.5 1.2-13.4 3.7l-10 6.4c-2.4 1.5-5.2-.3-4.7-3.1l2-9.6c-1-4.1-1.5-8.6-1.5-13.4Z" fill={brand}/><path d="M34 37h20M34 37l9-8M34 37l9 8" fill="none" stroke={white} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (kind === 'send') return <svg {...a}><path d="M12 38.2 67.5 11.5c2.7-1.3 5.3 1.3 4 4L44.8 71c-1.3 2.7-5.3 2.1-5.8-.8l-4.5-22.7-22.5-4.5c-2.9-.5-3.5-3.5.5-4.8Z" fill={brand}/><path d="m14.5 40.5 47.5-22M35.5 46 62 18" stroke={white} strokeWidth="4.2" strokeLinecap="round"/></svg>;
  if (kind === 'voice') return <svg {...a}><rect x="29" y="11" width="22" height="40" rx="11" fill={brand}/><path d="M20 39c0 12.2 8.9 21 20 21s20-8.8 20-21M40 60v10M31 70h18" fill="none" stroke={brandDark} strokeWidth="6" strokeLinecap="round"/></svg>;
  return <svg {...a}><path d="M40 10c-6.1 0-11 4.9-11 11v4.1c-5.7 3.4-9 9.5-9 16.4V55l-6 8c-1.9 2.5-.1 6 3 6h46c3.1 0 4.9-3.5 3-6l-6-8V41.5c0-6.9-3.3-13-9-16.4V21c0-6.1-4.9-11-11-11Z" fill={brand}/><path d="M31 70c.8 4.2 4.3 7 9 7s8.2-2.8 9-7" fill="none" stroke={inkSoft} strokeWidth="4.5" strokeLinecap="round"/><circle cx="58" cy="18" r="7" fill={heart}/><circle cx="58" cy="18" r="2.2" fill={face}/><path d="M56.2 18h3.6" stroke={ink} strokeWidth="1.8" strokeLinecap="round"/></svg>;
}

export const CommunicationChat = (p: CommunicationIconProps) => <CommunicationIcon {...p} kind="chat" />;
export const CommunicationReply = (p: CommunicationIconProps) => <CommunicationIcon {...p} kind="reply" />;
export const CommunicationSend = (p: CommunicationIconProps) => <CommunicationIcon {...p} kind="send" />;
export const CommunicationVoice = (p: CommunicationIconProps) => <CommunicationIcon {...p} kind="voice" />;
export const CommunicationNotification = (p: CommunicationIconProps) => <CommunicationIcon {...p} kind="notification" />;
