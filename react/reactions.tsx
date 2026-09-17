import type { SVGProps } from 'react';

export type ReactionKind = 'thumbs-up' | 'heart' | 'laughing' | 'wow' | 'sad';
export type ReactionIconProps = SVGProps<SVGSVGElement> & { size?: number };

const labels: Record<ReactionKind, string> = {
  'thumbs-up': 'ItundaFace thumbs up', heart: 'ItundaFace heart', laughing: 'ItundaFace laughing', wow: 'ItundaFace wow', sad: 'ItundaFace sad',
};

const brand = '#7472F4';
const skin = '#FFCF87';
const skinShadow = '#E0A655';
const face = '#FFCC4D';
const ink = '#664500';
const inkSoft = '#66471B';
const heart = '#EF4A63';
const heartDeep = '#C72E4C';
const cream = '#FFF4C9';
const brandHighlight = '#A9A8FF';

export function ReactionIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: ReactionIconProps & { kind: ReactionKind }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" role="img" aria-label={ariaLabel ?? labels[kind]} {...props}>
    {kind === 'thumbs-up' && <><path d="M27 34v37.2c0 2.6-2.1 4.7-4.7 4.7h-6.6c-2.6 0-4.7-2.1-4.7-4.7V39.1c0-2.8 2.2-5.1 5.1-5.1H27Z" fill={skinShadow}/><path d="M31.8 34h23.8c4.8 0 8.4 3.2 8.4 7.4 0 1.8-.6 3.5-1.7 4.8 2.6 1.4 4.3 4 4.3 6.9 0 2.3-1 4.5-2.7 6 1.1 1.5 1.7 3.4 1.7 5.4 0 3-1.5 5.7-4 7 0 .5.1 1 .1 1.5 0 4.7-3.8 8.5-8.5 8.5H37c-3 0-5.2-2.2-5.2-5.2V34Z" fill={skin}/><path d="M32.3 33.6 37.8 17c1.1-3.4 4.2-5.7 7.7-5.7 1.7 0 3 1.5 2.7 3.2l-2.3 14" fill="none" stroke={skin} strokeWidth="6.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.7 38.1v30.8" stroke={brand} strokeWidth="2.8" strokeLinecap="round"/></>}
    {kind === 'heart' && <><path d="M40 69C35 64.8 10 46.3 10 28.1 10 17.5 17.1 10 26.6 10c6.2 0 10.8 3 13.4 8.1C42.6 13 47.2 10 53.4 10 62.9 10 70 17.5 70 28.1 70 46.3 45 64.8 40 69Z" fill={heart}/><path d="M40 69C35 64.8 10 46.3 10 28.1 10 17.5 17.1 10 26.6 10c6.2 0 10.8 3 13.4 8.1Z" fill={heartDeep}/><path d="M40 18.1V69" stroke={brand} strokeWidth="2.4" strokeLinecap="round" opacity=".9"/></>}
    {kind === 'laughing' && <><circle cx="40" cy="40" r="34" fill={face}/><path d="M18 31c3-4.8 8.5-5.7 12-.2" fill="none" stroke={ink} strokeWidth="4.2" strokeLinecap="round"/><path d="M50 31c3.5-5.5 9-4.6 12 .2" fill="none" stroke={ink} strokeWidth="4.2" strokeLinecap="round"/><path d="M16.5 48.2c5.1 10.3 13 15.1 23.5 15.1s18.4-4.8 23.5-15.1c-6.5 3.4-14.3 5.1-23.5 5.1s-17-1.7-23.5-5.1Z" fill={inkSoft}/><path d="M24.5 54.2c.2 3 1 5.8 2.2 8" fill="none" stroke={brand} strokeWidth="3.8" strokeLinecap="round"/><path d="M22.5 47.2c1.7-1 3.7-1.5 5.8-1.5" fill="none" stroke={cream} strokeWidth="2.2" strokeLinecap="round"/></>}
    {kind === 'wow' && <><circle cx="40" cy="40" r="34" fill={face}/><circle cx="25.5" cy="34" r="5.2" fill={ink}/><circle cx="54.5" cy="34" r="5.2" fill={ink}/><ellipse cx="40" cy="55.5" rx="9" ry="11" fill={inkSoft}/><path d="M40 43.8v5" fill="none" stroke={brand} strokeWidth="2.6" strokeLinecap="round"/></>}
    {kind === 'sad' && <><circle cx="40" cy="40" r="34" fill={face}/><path d="M18.5 31.5c3.2 4.5 8.5 4.6 12.4.4" fill="none" stroke={ink} strokeWidth="4.2" strokeLinecap="round"/><path d="M49.1 31.9c3.9 4.2 9.2 4.1 12.4-.4" fill="none" stroke={ink} strokeWidth="4.2" strokeLinecap="round"/><path d="M26.8 61.2c3.1-6.2 7.6-9 13.2-9s10.1 2.8 13.2 9" fill="none" stroke={inkSoft} strokeWidth="4.2" strokeLinecap="round"/><path d="M49 40.8c3 3.5 4.8 7.1 4.8 10.5 0 4-2.5 6.6-5.6 6.6s-5.6-2.6-5.6-6.6c0-3.4 1.9-7 6.4-10.5Z" fill={brand}/><path d="M46.8 44c.7-.8 1.4-1.4 2.1-2" fill="none" stroke={brandHighlight} strokeWidth="1.7" strokeLinecap="round"/></>}
  </svg>;
}

export const ReactionThumbsUp = (props: ReactionIconProps) => <ReactionIcon kind="thumbs-up" {...props}/>;
export const ReactionHeart = (props: ReactionIconProps) => <ReactionIcon kind="heart" {...props}/>;
export const ReactionLaughing = (props: ReactionIconProps) => <ReactionIcon kind="laughing" {...props}/>;
export const ReactionWow = (props: ReactionIconProps) => <ReactionIcon kind="wow" {...props}/>;
export const ReactionSad = (props: ReactionIconProps) => <ReactionIcon kind="sad" {...props}/>;
