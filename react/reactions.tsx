import type { SVGProps } from 'react';

export type ReactionKind = 'thumbs-up' | 'heart' | 'laughing' | 'wow' | 'sad';
export type ReactionIconProps = SVGProps<SVGSVGElement> & { size?: number };

const labels: Record<ReactionKind, string> = {
  'thumbs-up': 'ItundaFace thumbs up',
  heart: 'ItundaFace heart',
  laughing: 'ItundaFace laughing',
  wow: 'ItundaFace wow',
  sad: 'ItundaFace sad',
};

export function ReactionIcon({ kind, size = 24, 'aria-label': ariaLabel, ...props }: ReactionIconProps & { kind: ReactionKind }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" role="img" aria-label={ariaLabel ?? labels[kind]} {...props}>
      {kind === 'thumbs-up' && <path d="M27 34v37.2c0 2.6-2.1 4.7-4.7 4.7h-6.6c-2.6 0-4.7-2.1-4.7-4.7V39.1c0-2.8 2.2-5.1 5.1-5.1H27Z" fill="#E0A655" />}
      {kind === 'thumbs-up' && <path d="M31.8 34h23.8c4.8 0 8.4 3.2 8.4 7.4 0 1.8-.6 3.5-1.7 4.8 2.6 1.4 4.3 4 4.3 6.9 0 2.3-1 4.5-2.7 6 1.1 1.5 1.7 3.4 1.7 5.4 0 3-1.5 5.7-4 7 0 .5.1 1 .1 1.5 0 4.7-3.8 8.5-8.5 8.5H37c-3 0-5.2-2.2-5.2-5.2V34Z" fill="#FFCF87" />}
      {kind === 'thumbs-up' && <path d="M32.3 33.6 37.8 17c1.1-3.4 4.2-5.7 7.7-5.7 1.7 0 3 1.5 2.7 3.2l-2.3 14" fill="none" stroke="#FFCF87" strokeWidth="6.2" strokeLinecap="round" strokeLinejoin="round" />}
      {kind === 'heart' && <><path d="M40 69C35 64.8 10 46.3 10 28.1 10 17.5 17.1 10 26.6 10c6.2 0 10.8 3 13.4 8.1C42.6 13 47.2 10 53.4 10 62.9 10 70 17.5 70 28.1 70 46.3 45 64.8 40 69Z" fill="#EF4A63" /><path d="M40 69C35 64.8 10 46.3 10 28.1 10 17.5 17.1 10 26.6 10c6.2 0 10.8 3 13.4 8.1Z" fill="#C72E4C" /><path d="M40 18.1V69" stroke="#7472F4" strokeWidth="2.4" strokeLinecap="round" opacity=".9" /></>}
      {kind === 'laughing' && <><circle cx="40" cy="40" r="34" fill="#FFCC4D" /><path d="M18 31c3-4.8 8.5-5.7 12-.2" fill="none" stroke="#664500" strokeWidth="4.2" strokeLinecap="round" /><path d="M50 30.8c3.5-5.5 9-4.6 12 .2" fill="none" stroke="#664500" strokeWidth="4.2" strokeLinecap="round" /><path d="M16.5 48.2c5.1 10.3 13 15.1 23.5 15.1s18.4-4.8 23.5-15.1c-6.5 3.4-14.3 5.1-23.5 5.1s-17-1.7-23.5-5.1Z" fill="#66471B" /><path d="M24.5 54.2c.2 3 1 5.8 2.2 8" fill="none" stroke="#7472F4" strokeWidth="3.8" strokeLinecap="round" /></>}
      {kind === 'wow' && <><circle cx="40" cy="40" r="34" fill="#FFCC4D" /><circle cx="26" cy="34" r="5" fill="#664500" /><circle cx="54" cy="34" r="5" fill="#664500" /><ellipse cx="40" cy="56" rx="9" ry="11" fill="#66471B" /></>}
      {kind === 'sad' && <><circle cx="40" cy="40" r="34" fill="#FFCC4D" /><path d="M20 32c3 4 9 4 12 0M48 32c3 4 9 4 12 0M26 62c4-8 24-8 28 0" fill="none" stroke="#664500" strokeWidth="4.4" strokeLinecap="round" /><path d="M48 40c3 4 6 9 6 13.6 0 4-3 7-6 7s-6-3-6-7c0-4.6 3-9.6 6-13.6Z" fill="#7472F4" /></>}
    </svg>
  );
}

export const ReactionThumbsUp = (props: ReactionIconProps) => <ReactionIcon kind="thumbs-up" {...props} />;
export const ReactionHeart = (props: ReactionIconProps) => <ReactionIcon kind="heart" {...props} />;
export const ReactionLaughing = (props: ReactionIconProps) => <ReactionIcon kind="laughing" {...props} />;
export const ReactionWow = (props: ReactionIconProps) => <ReactionIcon kind="wow" {...props} />;
export const ReactionSad = (props: ReactionIconProps) => <ReactionIcon kind="sad" {...props} />;
