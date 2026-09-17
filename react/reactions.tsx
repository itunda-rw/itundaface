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

export function ReactionIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: ReactionIconProps & { kind: ReactionKind }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" role="img" aria-label={ariaLabel ?? labels[kind]} {...props}>
    {kind === 'thumbs-up' && <><path d="M27 34v37c0 3-2 5-5 5h-6c-3 0-5-2-5-5V39c0-3 2-5 5-5z" fill={skinShadow}/><path d="M32 34h23c5 0 9 3 9 7 0 2-1 4-2 5 3 1 4 4 4 7 0 2-1 4-3 6 1 2 2 3 2 5 0 5-4 9-9 9H37c-3 0-5-2-5-5z" fill={skin}/><path d="M32 34l6-17c1-3 4-6 8-6 2 0 3 2 3 3l-2 14" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 39v29" stroke={brand} strokeWidth="2.6" strokeLinecap="round"/></>}
    {kind === 'heart' && <><path d="M40 69C35 65 10 47 10 28c0-11 7-18 17-18 6 0 11 3 13 8 3-5 8-8 14-8 10 0 17 7 17 18 0 19-25 37-31 41Z" fill={heart}/><path d="M40 69C35 65 10 47 10 28c0-11 7-18 17-18 6 0 11 3 13 8Z" fill={heartDeep}/><path d="M40 18v50" stroke={brand} strokeWidth="2.2" strokeLinecap="round" opacity=".9"/></>}
    {kind === 'laughing' && <><circle cx="40" cy="40" r="34" fill={face}/><path d="M18 31c3-5 9-5 12 0M50 31c3-5 9-5 12 0" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round"/><path d="M17 48c5 10 13 15 23 15s18-5 23-15c-7 3-15 5-23 5s-16-2-23-5Z" fill={inkSoft}/><path d="M25 55c0 3 1 5 2 7M52 55c0 3-1 5-2 7" fill="none" stroke={brand} strokeWidth="3.2" strokeLinecap="round"/></>}
    {kind === 'wow' && <><circle cx="40" cy="40" r="34" fill={face}/><circle cx="25.5" cy="34" r="5" fill={ink}/><circle cx="54.5" cy="34" r="5" fill={ink}/><ellipse cx="40" cy="55" rx="9" ry="11" fill={inkSoft}/><path d="M40 44v5" stroke={brand} strokeWidth="2.5" strokeLinecap="round"/></>}
    {kind === 'sad' && <><circle cx="40" cy="40" r="34" fill={face}/><path d="M18 32c3 4 9 5 13 0M49 32c4 5 10 4 13 0" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round"/><path d="M27 61c3-6 8-9 13-9s10 3 13 9" fill="none" stroke={inkSoft} strokeWidth="4" strokeLinecap="round"/><path d="M49 41c3 4 5 7 5 10 0 4-2 6-5 6s-5-2-5-6c0-3 2-6 5-10Z" fill={brand}/></>}
  </svg>;
}

export const ReactionThumbsUp = (props: ReactionIconProps) => <ReactionIcon kind="thumbs-up" {...props}/>;
export const ReactionHeart = (props: ReactionIconProps) => <ReactionIcon kind="heart" {...props}/>;
export const ReactionLaughing = (props: ReactionIconProps) => <ReactionIcon kind="laughing" {...props}/>;
export const ReactionWow = (props: ReactionIconProps) => <ReactionIcon kind="wow" {...props}/>;
export const ReactionSad = (props: ReactionIconProps) => <ReactionIcon kind="sad" {...props}/>;
