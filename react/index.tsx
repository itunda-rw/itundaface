// itundaface React components -- thin wrappers around the raw SVGs in ../svg/.
// MIT licensed, see ../LICENSE.
import type { SVGProps } from 'react';

export type ItundaFaceIconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...rest }: ItundaFaceIconProps & { children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" {...rest}>
      {children}
    </svg>
  );
}

export function ReactionThumbsUp(props: ItundaFaceIconProps) {
  return (
    <Base {...props}>
      <path d="M28,32 V72 C28,74.2 26.2,76 24,76 H16 C13.8,76 12,74.2 12,72 V38 C12,35.8 13.8,34 16,34 H24 Z" fill="#e0a655"/>
      <path d="M32,34 H56 C60,34 63,37.2 63,41.2 C63,42.6 62.6,44 61.9,45.1 C64.3,46.1 66,48.5 66,51.2 C66,53.4 64.9,55.3 63.2,56.6 C64.3,58 65,59.8 65,61.7 C65,64.5 63.4,66.9 61.1,68.1 C61.4,68.9 61.6,69.8 61.6,70.7 C61.6,74.7 58.3,78 54.3,78 H36 C33.8,78 32,76.2 32,74 V34 Z" fill="#ffcf87"/>
      <path d="M32,34 L38,16 C39,12.6 42.1,10.3 45.6,10.3 C47,10.3 48,11.5 47.8,12.9 L45.6,28" stroke="#ffcf87" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Base>
  );
}

export function ReactionHeart(props: ItundaFaceIconProps) {
  return (
    <Base {...props}>
      <path d="M40,18.4 C42,14.4 46.4,10 53.4,10 C62.9,10 72,17.7 72,29.6 C72,52.6 40,74 40,74 L40,18.4 Z" fill="#ef4a63"/>
      <path d="M40,18.4 C38,14.4 33.6,10 26.6,10 C17.1,10 8,17.7 8,29.6 C8,52.6 40,74 40,74 L40,18.4 Z" fill="#c72e4c"/>
    </Base>
  );
}

export function ReactionLaughing(props: ItundaFaceIconProps) {
  return (
    <Base {...props}>
      <circle cx="40" cy="40" r="34" fill="#ffcc4d"/>
      <path d="M18,32 C21,26 27,26 30,32" stroke="#664500" strokeWidth="4.4" strokeLinecap="round" fill="none"/>
      <path d="M50,32 C53,26 59,26 62,32" stroke="#664500" strokeWidth="4.4" strokeLinecap="round" fill="none"/>
      <path d="M16,48 C16,48 24,66 40,66 C56,66 64,48 64,48 C64,48 56,54 40,54 C24,54 16,48 16,48 Z" fill="#66471b"/>
      <path d="M23,52 C23,52 26,60 25,66" stroke="#7472f4" strokeWidth="4" strokeLinecap="round" fill="none"/>
    </Base>
  );
}

export function ReactionWow(props: ItundaFaceIconProps) {
  return (
    <Base {...props}>
      <circle cx="40" cy="40" r="34" fill="#ffcc4d"/>
      <circle cx="26" cy="34" r="5" fill="#664500"/>
      <circle cx="54" cy="34" r="5" fill="#664500"/>
      <ellipse cx="40" cy="56" rx="9" ry="11" fill="#66471b"/>
    </Base>
  );
}

export function ReactionSad(props: ItundaFaceIconProps) {
  return (
    <Base {...props}>
      <circle cx="40" cy="40" r="34" fill="#ffcc4d"/>
      <path d="M20,32 C23,36 29,36 32,32" stroke="#664500" strokeWidth="4.4" strokeLinecap="round" fill="none"/>
      <path d="M48,32 C51,36 57,36 60,32" stroke="#664500" strokeWidth="4.4" strokeLinecap="round" fill="none"/>
      <path d="M26,62 C30,54 50,54 54,62" stroke="#664500" strokeWidth="4.4" strokeLinecap="round" fill="none"/>
      <path d="M48,40 C51,44 54,49 54,53.6 C54,57.6 51,60.6 48,60.6 C45,60.6 42,57.6 42,53.6 C42,49 45,44 48,40 Z" fill="#7472f4"/>
    </Base>
  );
}

export function ReactionThumbsUp3D(props: ItundaFaceIconProps) {
  return (
    <Base {...props}>
      <defs>
      <radialGradient id="itdf-thumbs-up-skin" cx="32%" cy="22%" r="85%">
      <stop offset="0%" stopColor="#ffe4b3"/>
      <stop offset="50%" stopColor="#ffcf87"/>
      <stop offset="100%" stopColor="#cf8f3e"/>
      </radialGradient>
      <radialGradient id="itdf-thumbs-up-cuff" cx="32%" cy="20%" r="90%">
      <stop offset="0%" stopColor="#f6c988"/>
      <stop offset="55%" stopColor="#e0a655"/>
      <stop offset="100%" stopColor="#9c6423"/>
      </radialGradient>
      <linearGradient id="itdf-thumbs-up-heart-r" x1="20%" y1="0%" x2="88%" y2="95%">
      <stop offset="0%" stopColor="#ff9fb0"/>
      <stop offset="45%" stopColor="#ef4a63"/>
      <stop offset="100%" stopColor="#a91733"/>
      </linearGradient>
      <linearGradient id="itdf-thumbs-up-heart-l" x1="75%" y1="5%" x2="10%" y2="95%">
      <stop offset="0%" stopColor="#f2748c"/>
      <stop offset="50%" stopColor="#c72e4c"/>
      <stop offset="100%" stopColor="#7a0f28"/>
      </linearGradient>
      <radialGradient id="itdf-thumbs-up-face" cx="32%" cy="20%" r="90%">
      <stop offset="0%" stopColor="#ffe89e"/>
      <stop offset="50%" stopColor="#ffcc4d"/>
      <stop offset="100%" stopColor="#d98e0a"/>
      </radialGradient>
      <radialGradient id="itdf-thumbs-up-tear" cx="32%" cy="16%" r="90%">
      <stop offset="0%" stopColor="#c0c6ff"/>
      <stop offset="55%" stopColor="#7c7bfd"/>
      <stop offset="100%" stopColor="#483eb6"/>
      </radialGradient>
      <radialGradient id="itdf-thumbs-up-hl" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6"/>
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="itdf-thumbs-up-rim" x1="20%" y1="0%" x2="70%" y2="60%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85"/>
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
      </linearGradient>
      <radialGradient id="itdf-thumbs-up-floor" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#000000" stopOpacity="0.28"/>
      <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
      </radialGradient>
      <filter id="itdf-thumbs-up-ds" x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="3.5" stdDeviation="3.4" floodColor="#000000" floodOpacity="0.4"/>
      </filter>
      </defs>
      <ellipse cx="40" cy="76" rx="26" ry="5" fill="url(#itdf-thumbs-up-floor)"/>
      <g filter="url(#itdf-thumbs-up-ds)">
      <path d="M30,33 V72 C30,74.4 28.1,76.4 25.7,76.4 H16.3 C13.9,76.4 12,74.4 12,72 V38 C12,35.6 13.9,33.6 16.3,33.6 H25.7 Z" fill="url(#itdf-thumbs-up-cuff)"/>
      <path d="M34,33.6 H55 C59.4,33.6 63,37.2 63,41.6 C63,42.9 62.7,44.1 62.1,45.2 C64.6,46.4 66.4,48.9 66.4,51.8 C66.4,54.1 65.3,56.1 63.6,57.4 C64.7,58.8 65.4,60.6 65.4,62.5 C65.4,65.3 63.9,67.7 61.7,68.9 C61.9,69.7 62.1,70.5 62.1,71.4 C62.1,75.3 58.9,78.4 55,78.4 H37 C34.6,78.4 32.7,76.4 32.7,74 V34.9 Z" fill="url(#itdf-thumbs-up-skin)"/>
      <path d="M34,33.6 L39,16.5 C40,13.3 43,11.1 46.3,11.1 C47.6,11.1 48.6,12.3 48.4,13.6 L46.2,29.4" stroke="url(#itdf-thumbs-up-skin)" strokeWidth="6.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <ellipse cx="31" cy="22" rx="9" ry="6" fill="url(#itdf-thumbs-up-hl)"/>
      </g>
    </Base>
  );
}

export function ReactionHeart3D(props: ItundaFaceIconProps) {
  return (
    <Base {...props}>
      <defs>
      <radialGradient id="itdf-heart-skin" cx="32%" cy="22%" r="85%">
      <stop offset="0%" stopColor="#ffe4b3"/>
      <stop offset="50%" stopColor="#ffcf87"/>
      <stop offset="100%" stopColor="#cf8f3e"/>
      </radialGradient>
      <radialGradient id="itdf-heart-cuff" cx="32%" cy="20%" r="90%">
      <stop offset="0%" stopColor="#f6c988"/>
      <stop offset="55%" stopColor="#e0a655"/>
      <stop offset="100%" stopColor="#9c6423"/>
      </radialGradient>
      <linearGradient id="itdf-heart-heart-r" x1="20%" y1="0%" x2="88%" y2="95%">
      <stop offset="0%" stopColor="#ff9fb0"/>
      <stop offset="45%" stopColor="#ef4a63"/>
      <stop offset="100%" stopColor="#a91733"/>
      </linearGradient>
      <linearGradient id="itdf-heart-heart-l" x1="75%" y1="5%" x2="10%" y2="95%">
      <stop offset="0%" stopColor="#f2748c"/>
      <stop offset="50%" stopColor="#c72e4c"/>
      <stop offset="100%" stopColor="#7a0f28"/>
      </linearGradient>
      <radialGradient id="itdf-heart-face" cx="32%" cy="20%" r="90%">
      <stop offset="0%" stopColor="#ffe89e"/>
      <stop offset="50%" stopColor="#ffcc4d"/>
      <stop offset="100%" stopColor="#d98e0a"/>
      </radialGradient>
      <radialGradient id="itdf-heart-tear" cx="32%" cy="16%" r="90%">
      <stop offset="0%" stopColor="#c0c6ff"/>
      <stop offset="55%" stopColor="#7c7bfd"/>
      <stop offset="100%" stopColor="#483eb6"/>
      </radialGradient>
      <radialGradient id="itdf-heart-hl" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6"/>
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="itdf-heart-rim" x1="20%" y1="0%" x2="70%" y2="60%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85"/>
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
      </linearGradient>
      <radialGradient id="itdf-heart-floor" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#000000" stopOpacity="0.28"/>
      <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
      </radialGradient>
      <filter id="itdf-heart-ds" x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="3.5" stdDeviation="3.4" floodColor="#000000" floodOpacity="0.4"/>
      </filter>
      </defs>
      <ellipse cx="40" cy="76" rx="26" ry="5" fill="url(#itdf-heart-floor)"/>
      <g filter="url(#itdf-heart-ds)">
      <path d="M40,17.2 C41.3,13 45.9,8.4 53.2,8.4 C63.1,8.4 72.6,16.4 72.6,28.8 C72.6,52.4 40,74.4 40,74.4 L40,17.2 Z" fill="url(#itdf-heart-heart-r)"/>
      <path d="M40,17.2 C38.7,13 34.1,8.4 26.8,8.4 C16.9,8.4 7.4,16.4 7.4,28.8 C7.4,52.4 40,74.4 40,74.4 L40,17.2 Z" fill="url(#itdf-heart-heart-l)"/>
      <path d="M24,13 C29,10.5 35,12.5 38,17" stroke="url(#itdf-heart-rim)" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <ellipse cx="26" cy="24" rx="11" ry="7.5" fill="url(#itdf-heart-hl)"/>
      </g>
    </Base>
  );
}

export function ReactionLaughing3D(props: ItundaFaceIconProps) {
  return (
    <Base {...props}>
      <defs>
      <radialGradient id="itdf-laughing-skin" cx="32%" cy="22%" r="85%">
      <stop offset="0%" stopColor="#ffe4b3"/>
      <stop offset="50%" stopColor="#ffcf87"/>
      <stop offset="100%" stopColor="#cf8f3e"/>
      </radialGradient>
      <radialGradient id="itdf-laughing-cuff" cx="32%" cy="20%" r="90%">
      <stop offset="0%" stopColor="#f6c988"/>
      <stop offset="55%" stopColor="#e0a655"/>
      <stop offset="100%" stopColor="#9c6423"/>
      </radialGradient>
      <linearGradient id="itdf-laughing-heart-r" x1="20%" y1="0%" x2="88%" y2="95%">
      <stop offset="0%" stopColor="#ff9fb0"/>
      <stop offset="45%" stopColor="#ef4a63"/>
      <stop offset="100%" stopColor="#a91733"/>
      </linearGradient>
      <linearGradient id="itdf-laughing-heart-l" x1="75%" y1="5%" x2="10%" y2="95%">
      <stop offset="0%" stopColor="#f2748c"/>
      <stop offset="50%" stopColor="#c72e4c"/>
      <stop offset="100%" stopColor="#7a0f28"/>
      </linearGradient>
      <radialGradient id="itdf-laughing-face" cx="32%" cy="20%" r="90%">
      <stop offset="0%" stopColor="#ffe89e"/>
      <stop offset="50%" stopColor="#ffcc4d"/>
      <stop offset="100%" stopColor="#d98e0a"/>
      </radialGradient>
      <radialGradient id="itdf-laughing-tear" cx="32%" cy="16%" r="90%">
      <stop offset="0%" stopColor="#c0c6ff"/>
      <stop offset="55%" stopColor="#7c7bfd"/>
      <stop offset="100%" stopColor="#483eb6"/>
      </radialGradient>
      <radialGradient id="itdf-laughing-hl" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6"/>
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="itdf-laughing-rim" x1="20%" y1="0%" x2="70%" y2="60%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85"/>
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
      </linearGradient>
      <radialGradient id="itdf-laughing-floor" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#000000" stopOpacity="0.28"/>
      <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
      </radialGradient>
      <filter id="itdf-laughing-ds" x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="3.5" stdDeviation="3.4" floodColor="#000000" floodOpacity="0.4"/>
      </filter>
      </defs>
      <ellipse cx="40" cy="76" rx="26" ry="5" fill="url(#itdf-laughing-floor)"/>
      <g filter="url(#itdf-laughing-ds)">
      <circle cx="40" cy="40" r="34.5" fill="url(#itdf-laughing-face)"/>
      <path d="M11,26 C16,15 30,12 38,18" stroke="url(#itdf-laughing-rim)" strokeWidth="3.4" strokeLinecap="round" fill="none" opacity="0.7"/>
      <ellipse cx="27" cy="23" rx="13" ry="8.5" fill="url(#itdf-laughing-hl)"/>
      <path d="M17.5,31.5 C20.7,25.3 27,25.3 30.2,31.5" stroke="#7a4d00" strokeWidth="4.6" strokeLinecap="round" fill="none"/>
      <path d="M49.8,31.5 C53,25.3 59.3,25.3 62.5,31.5" stroke="#7a4d00" strokeWidth="4.6" strokeLinecap="round" fill="none"/>
      <path d="M15,48 C15,48 23.5,67 40,67 C56.5,67 65,48 65,48 C65,48 56.5,54.5 40,54.5 C23.5,54.5 15,48 15,48 Z" fill="#5c3d15"/>
      <path d="M18,50 C18,50 25,60 40,60 C55,60 62,50 62,50" stroke="#3d2a10" strokeWidth="1.6" fill="none" opacity="0.4"/>
      <path d="M22.5,53 C22.5,53 25.5,61 24.3,67.5" stroke="url(#itdf-laughing-tear)" strokeWidth="4.6" strokeLinecap="round" fill="none"/>
      <ellipse cx="23.5" cy="60" rx="2.6" ry="3.4" fill="#ffffff" opacity="0.55"/>
      </g>
    </Base>
  );
}

export function ReactionWow3D(props: ItundaFaceIconProps) {
  return (
    <Base {...props}>
      <defs>
      <radialGradient id="itdf-wow-skin" cx="32%" cy="22%" r="85%">
      <stop offset="0%" stopColor="#ffe4b3"/>
      <stop offset="50%" stopColor="#ffcf87"/>
      <stop offset="100%" stopColor="#cf8f3e"/>
      </radialGradient>
      <radialGradient id="itdf-wow-cuff" cx="32%" cy="20%" r="90%">
      <stop offset="0%" stopColor="#f6c988"/>
      <stop offset="55%" stopColor="#e0a655"/>
      <stop offset="100%" stopColor="#9c6423"/>
      </radialGradient>
      <linearGradient id="itdf-wow-heart-r" x1="20%" y1="0%" x2="88%" y2="95%">
      <stop offset="0%" stopColor="#ff9fb0"/>
      <stop offset="45%" stopColor="#ef4a63"/>
      <stop offset="100%" stopColor="#a91733"/>
      </linearGradient>
      <linearGradient id="itdf-wow-heart-l" x1="75%" y1="5%" x2="10%" y2="95%">
      <stop offset="0%" stopColor="#f2748c"/>
      <stop offset="50%" stopColor="#c72e4c"/>
      <stop offset="100%" stopColor="#7a0f28"/>
      </linearGradient>
      <radialGradient id="itdf-wow-face" cx="32%" cy="20%" r="90%">
      <stop offset="0%" stopColor="#ffe89e"/>
      <stop offset="50%" stopColor="#ffcc4d"/>
      <stop offset="100%" stopColor="#d98e0a"/>
      </radialGradient>
      <radialGradient id="itdf-wow-tear" cx="32%" cy="16%" r="90%">
      <stop offset="0%" stopColor="#c0c6ff"/>
      <stop offset="55%" stopColor="#7c7bfd"/>
      <stop offset="100%" stopColor="#483eb6"/>
      </radialGradient>
      <radialGradient id="itdf-wow-hl" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6"/>
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="itdf-wow-rim" x1="20%" y1="0%" x2="70%" y2="60%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85"/>
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
      </linearGradient>
      <radialGradient id="itdf-wow-floor" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#000000" stopOpacity="0.28"/>
      <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
      </radialGradient>
      <filter id="itdf-wow-ds" x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="3.5" stdDeviation="3.4" floodColor="#000000" floodOpacity="0.4"/>
      </filter>
      </defs>
      <ellipse cx="40" cy="76" rx="26" ry="5" fill="url(#itdf-wow-floor)"/>
      <g filter="url(#itdf-wow-ds)">
      <circle cx="40" cy="40" r="34.5" fill="url(#itdf-wow-face)"/>
      <path d="M11,26 C16,15 30,12 38,18" stroke="url(#itdf-wow-rim)" strokeWidth="3.4" strokeLinecap="round" fill="none" opacity="0.7"/>
      <ellipse cx="27" cy="23" rx="13" ry="8.5" fill="url(#itdf-wow-hl)"/>
      <circle cx="26" cy="33.5" r="5.2" fill="#5c3d15"/>
      <circle cx="54" cy="33.5" r="5.2" fill="#5c3d15"/>
      <circle cx="24.3" cy="31.8" r="1.4" fill="#ffffff" opacity="0.75"/>
      <circle cx="52.3" cy="31.8" r="1.4" fill="#ffffff" opacity="0.75"/>
      <ellipse cx="40" cy="56.5" rx="9.4" ry="11.5" fill="#5c3d15"/>
      <ellipse cx="40" cy="59" rx="5.6" ry="6.5" fill="#3d2a10" opacity="0.5"/>
      </g>
    </Base>
  );
}

export function ReactionSad3D(props: ItundaFaceIconProps) {
  return (
    <Base {...props}>
      <defs>
      <radialGradient id="itdf-sad-skin" cx="32%" cy="22%" r="85%">
      <stop offset="0%" stopColor="#ffe4b3"/>
      <stop offset="50%" stopColor="#ffcf87"/>
      <stop offset="100%" stopColor="#cf8f3e"/>
      </radialGradient>
      <radialGradient id="itdf-sad-cuff" cx="32%" cy="20%" r="90%">
      <stop offset="0%" stopColor="#f6c988"/>
      <stop offset="55%" stopColor="#e0a655"/>
      <stop offset="100%" stopColor="#9c6423"/>
      </radialGradient>
      <linearGradient id="itdf-sad-heart-r" x1="20%" y1="0%" x2="88%" y2="95%">
      <stop offset="0%" stopColor="#ff9fb0"/>
      <stop offset="45%" stopColor="#ef4a63"/>
      <stop offset="100%" stopColor="#a91733"/>
      </linearGradient>
      <linearGradient id="itdf-sad-heart-l" x1="75%" y1="5%" x2="10%" y2="95%">
      <stop offset="0%" stopColor="#f2748c"/>
      <stop offset="50%" stopColor="#c72e4c"/>
      <stop offset="100%" stopColor="#7a0f28"/>
      </linearGradient>
      <radialGradient id="itdf-sad-face" cx="32%" cy="20%" r="90%">
      <stop offset="0%" stopColor="#ffe89e"/>
      <stop offset="50%" stopColor="#ffcc4d"/>
      <stop offset="100%" stopColor="#d98e0a"/>
      </radialGradient>
      <radialGradient id="itdf-sad-tear" cx="32%" cy="16%" r="90%">
      <stop offset="0%" stopColor="#c0c6ff"/>
      <stop offset="55%" stopColor="#7c7bfd"/>
      <stop offset="100%" stopColor="#483eb6"/>
      </radialGradient>
      <radialGradient id="itdf-sad-hl" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6"/>
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="itdf-sad-rim" x1="20%" y1="0%" x2="70%" y2="60%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85"/>
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
      </linearGradient>
      <radialGradient id="itdf-sad-floor" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#000000" stopOpacity="0.28"/>
      <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
      </radialGradient>
      <filter id="itdf-sad-ds" x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="3.5" stdDeviation="3.4" floodColor="#000000" floodOpacity="0.4"/>
      </filter>
      </defs>
      <ellipse cx="40" cy="76" rx="26" ry="5" fill="url(#itdf-sad-floor)"/>
      <g filter="url(#itdf-sad-ds)">
      <circle cx="40" cy="40" r="34.5" fill="url(#itdf-sad-face)"/>
      <path d="M11,26 C16,15 30,12 38,18" stroke="url(#itdf-sad-rim)" strokeWidth="3.4" strokeLinecap="round" fill="none" opacity="0.7"/>
      <ellipse cx="27" cy="23" rx="13" ry="8.5" fill="url(#itdf-sad-hl)"/>
      <path d="M19.5,31.5 C22.7,36 29,36 32.2,31.5" stroke="#5c3d15" strokeWidth="4.6" strokeLinecap="round" fill="none"/>
      <path d="M47.8,31.5 C51,36 57.3,36 60.5,31.5" stroke="#5c3d15" strokeWidth="4.6" strokeLinecap="round" fill="none"/>
      <path d="M25.5,63 C30,54.5 50,54.5 54.5,63" stroke="#5c3d15" strokeWidth="4.6" strokeLinecap="round" fill="none"/>
      <path d="M48,41 C51.5,45.5 55,50.5 55,55.5 C55,60 51.5,63.4 48,63.4 C44.5,63.4 41,60 41,55.5 C41,50.5 44.5,45.5 48,41 Z" fill="url(#itdf-sad-tear)"/>
      <ellipse cx="45.6" cy="49" rx="1.8" ry="2.6" fill="#ffffff" opacity="0.6"/>
      </g>
    </Base>
  );
}

// itundaface place-category glyphs -- thin wrappers around ../svg/places/.
export function PlaceBase({ size = 24, children, ...rest }: ItundaFaceIconProps & { children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" {...rest}>
      {children}
    </svg>
  );
}

export function PlaceRestaurant(props: ItundaFaceIconProps) {
  return (
    <PlaceBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#feb6aa"/>
      <g stroke="#a20800" strokeWidth="2.8" strokeLinecap="round" fill="none">
      <path d="M20,14 V26 M24,14 V26 M22,14 V44"/>
      <path d="M20,26 C20,29.5 24,29.5 24,26"/>
      <path d="M40,14 C34,16 34,22 40,24 V44"/>
      </g>
    </PlaceBase>
  );
}

export function PlaceCafe(props: ItundaFaceIconProps) {
  return (
    <PlaceBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#ecc38c"/>
      <path d="M16,26 H40 V38 C40,43.5 35.5,48 30,48 H26 C20.5,48 16,43.5 16,38 Z" fill="#744c00"/>
      <path d="M40,28 H45 C47.8,28 50,30.2 50,33 C50,35.8 47.8,38 45,38 H40" fill="none" stroke="#744c00" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M22,20 C22,17 25,17 25,14 M29,20 C29,17 32,17 32,14" stroke="#744c00" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.8"/>
    </PlaceBase>
  );
}

export function PlaceHospital(props: ItundaFaceIconProps) {
  return (
    <PlaceBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#feb6aa"/>
      <rect x="14" y="16" width="32" height="34" rx="4" fill="#ffffff"/>
      <path d="M30,22 V44 M19,33 H41" stroke="#a20800" strokeWidth="5" strokeLinecap="round"/>
    </PlaceBase>
  );
}

export function PlacePharmacy(props: ItundaFaceIconProps) {
  return (
    <PlaceBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#8bdecb"/>
      <g transform="rotate(-40 30 30)">
      <rect x="12" y="23" width="36" height="14" rx="7" fill="#ffffff"/>
      <path d="M12,30 A7,7 0 0 1 19,23 H30 V37 H19 A7,7 0 0 1 12,30 Z" fill="#006455"/>
      </g>
    </PlaceBase>
  );
}

export function PlaceBank(props: ItundaFaceIconProps) {
  return (
    <PlaceBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#c0c6ff"/>
      <path d="M14,22 L30,12 L46,22 Z" fill="#282565"/>
      <rect x="14" y="22" width="32" height="4" fill="#282565"/>
      <rect x="18" y="28" width="4" height="16" fill="#282565"/>
      <rect x="26" y="28" width="4" height="16" fill="#282565"/>
      <rect x="34" y="28" width="4" height="16" fill="#282565"/>
      <rect x="42" y="28" width="4" height="16" fill="#282565"/>
      <rect x="13" y="46" width="34" height="4" rx="1" fill="#282565"/>
    </PlaceBase>
  );
}

export function PlaceAtm(props: ItundaFaceIconProps) {
  return (
    <PlaceBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#c0c6ff"/>
      <rect x="17" y="14" width="26" height="34" rx="4" fill="#282565"/>
      <rect x="21" y="19" width="18" height="12" rx="1.5" fill="#7c7bfd"/>
      <rect x="21" y="35" width="18" height="3" rx="1.5" fill="#7c7bfd"/>
      <circle cx="34" cy="42" r="1.6" fill="#7c7bfd"/>
    </PlaceBase>
  );
}

export function PlaceHotel(props: ItundaFaceIconProps) {
  return (
    <PlaceBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#dccb8a"/>
      <path d="M14,44 V26 C14,24.3 15.3,23 17,23 H27 C28.7,23 30,24.3 30,26 V32" stroke="#665400" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30,32 H43 C44.7,32 46,33.3 46,35 V44" stroke="#665400" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="14" y="32" width="32" height="4" rx="1.5" fill="#665400"/>
      <line x1="12" y1="44" x2="12" y2="38" stroke="#665400" strokeWidth="2.6" strokeLinecap="round"/>
      <line x1="48" y1="44" x2="48" y2="38" stroke="#665400" strokeWidth="2.6" strokeLinecap="round"/>
    </PlaceBase>
  );
}

export function PlaceSupermarket(props: ItundaFaceIconProps) {
  return (
    <PlaceBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#b9d79b"/>
      <path d="M16,16 H21 L26,38 H43 L47,22 H24" stroke="#3e6200" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="29" cy="45" r="3.4" fill="#3e6200"/>
      <circle cx="41" cy="45" r="3.4" fill="#3e6200"/>
    </PlaceBase>
  );
}

export function PlaceGasStation(props: ItundaFaceIconProps) {
  return (
    <PlaceBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#c0ccdd"/>
      <rect x="17" y="16" width="18" height="32" rx="3" fill="#415676"/>
      <rect x="21" y="21" width="10" height="8" rx="1.5" fill="#c0ccdd"/>
      <path d="M35,26 H39 C41,26 42,27.5 42,29.5 V40 C42,41.5 43,42.5 44.5,42.5 C46,42.5 47,41.5 47,40 V32 L44,29" stroke="#415676" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </PlaceBase>
  );
}

export function PlaceSchool(props: ItundaFaceIconProps) {
  return (
    <PlaceBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#97d5f5"/>
      <path d="M30,16 L50,25 L30,34 L10,25 Z" fill="#005d7f"/>
      <path d="M20,29 V38 C20,41 24,44 30,44 C36,44 40,41 40,38 V29" stroke="#005d7f" strokeWidth="2.4" fill="none" strokeLinecap="round"/>
      <line x1="50" y1="25" x2="50" y2="37" stroke="#005d7f" strokeWidth="2.2" strokeLinecap="round"/>
    </PlaceBase>
  );
}

export function PlaceAgent(props: ItundaFaceIconProps) {
  return (
    <PlaceBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#c0c6ff"/>
      <path d="M24,20 C24,16 27,13 30,13 C33,13 36,16 36,20" stroke="#483eb6" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
      <path d="M20,22 H40 L44,38 C45,43 41,48 35,48 H25 C19,48 15,43 16,38 Z" fill="#483eb6"/>
      <circle cx="30" cy="34" r="6" fill="none" stroke="#c0c6ff" strokeWidth="2"/>
      <line x1="30" y1="30" x2="30" y2="38" stroke="#c0c6ff" strokeWidth="2" strokeLinecap="round"/>
    </PlaceBase>
  );
}

export function PlaceMarket(props: ItundaFaceIconProps) {
  return (
    <PlaceBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#b3d5b9"/>
      <path d="M16,26 H44 L40,44 C39.5,46.3 37.5,48 35,48 H25 C22.5,48 20.5,46.3 20,44 Z" fill="#156631"/>
      <path d="M23,26 C23,20 26,16 30,16 C34,16 37,20 37,26" stroke="#156631" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
      <path d="M22,32 H38 M23,38 H37" stroke="#b3d5b9" strokeWidth="1.8" opacity="0.7"/>
    </PlaceBase>
  );
}

export function PlaceBusStop(props: ItundaFaceIconProps) {
  return (
    <PlaceBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#c0ccdd"/>
      <rect x="14" y="18" width="32" height="22" rx="5" fill="#253142"/>
      <rect x="18" y="22" width="9" height="8" rx="1.5" fill="#c0ccdd"/>
      <rect x="33" y="22" width="9" height="8" rx="1.5" fill="#c0ccdd"/>
      <circle cx="21" cy="43" r="3.4" fill="#253142"/>
      <circle cx="39" cy="43" r="3.4" fill="#253142"/>
    </PlaceBase>
  );
}

// itundaface gift-theme + split-bill glyphs -- thin wrappers around ../svg/gifts/.
export function GiftBase({ size = 24, children, ...rest }: ItundaFaceIconProps & { children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" {...rest}>
      {children}
    </svg>
  );
}

export function GiftBox(props: ItundaFaceIconProps) {
  return (
    <GiftBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#c0c6ff"/>
      <rect x="14" y="26" width="32" height="22" rx="2" fill="#282565"/>
      <rect x="14" y="20" width="32" height="8" rx="2" fill="#483eb6"/>
      <rect x="28" y="20" width="4" height="28" fill="#7c7bfd"/>
      <path d="M22,20 C16,20 15,12 22,12 C27,12 28,17 28,20 Z" fill="#7c7bfd"/>
      <path d="M38,20 C44,20 45,12 38,12 C33,12 32,17 32,20 Z" fill="#7c7bfd"/>
    </GiftBase>
  );
}

export function GiftCongratulations(props: ItundaFaceIconProps) {
  return (
    <GiftBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#dccb8a"/>
      <path d="M18,44 L36,18 L42,46 Z" fill="#665400"/>
      <circle cx="14" cy="16" r="2.6" fill="#665400"/>
      <circle cx="24" cy="8" r="2.2" fill="#665400"/>
      <circle cx="36" cy="8" r="2.6" fill="#665400"/>
      <circle cx="46" cy="15" r="2.2" fill="#665400"/>
      <circle cx="20" cy="24" r="1.8" fill="#665400"/>
    </GiftBase>
  );
}

export function GiftHeartfelt(props: ItundaFaceIconProps) {
  return (
    <GiftBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#feb6aa"/>
      <rect x="13" y="18" width="34" height="24" rx="3" fill="#a20800"/>
      <path d="M13,20 L30,32 L47,20" stroke="#feb6aa" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30,29 C30,29 25,25.5 25,22.3 C25,20 27,18.6 29,19.4 C29.6,19.6 30,20.1 30,20.7 C30,20.1 30.4,19.6 31,19.4 C33,18.6 35,20 35,22.3 C35,25.5 30,29 30,29 Z" fill="#feb6aa"/>
    </GiftBase>
  );
}

export function GiftGoodLuck(props: ItundaFaceIconProps) {
  return (
    <GiftBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#b3d5b9"/>
      <path d="M30,30 C30,22 24,18 20,22 C16,26 20,32 28,31 Z" fill="#156631"/>
      <path d="M30,30 C38,30 42,24 38,20 C34,16 28,20 29,28 Z" fill="#156631"/>
      <path d="M30,30 C22,30 18,36 22,40 C26,44 32,40 31,32 Z" fill="#156631"/>
      <path d="M30,30 C30,38 36,42 40,38 C44,34 40,28 32,29 Z" fill="#156631"/>
      <line x1="30" y1="30" x2="30" y2="46" stroke="#156631" strokeWidth="2.4" strokeLinecap="round"/>
    </GiftBase>
  );
}

export function GiftSettleUp(props: ItundaFaceIconProps) {
  return (
    <GiftBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#c0ccdd"/>
      <path d="M18,12 H42 V46 L38,43 L34,46 L30,43 L26,46 L22,43 L18,46 Z" fill="#253142"/>
      <line x1="22" y1="20" x2="38" y2="20" stroke="#c0ccdd" strokeWidth="2" strokeLinecap="round"/>
      <line x1="22" y1="26" x2="38" y2="26" stroke="#c0ccdd" strokeWidth="2" strokeLinecap="round"/>
      <line x1="22" y1="32" x2="34" y2="32" stroke="#c0ccdd" strokeWidth="2" strokeLinecap="round"/>
    </GiftBase>
  );
}

export function SplitBillDice(props: ItundaFaceIconProps) {
  return (
    <GiftBase {...props}>
      <circle cx="30" cy="30" r="28" fill="#8bd8d1"/>
      <rect x="14" y="16" width="24" height="24" rx="5" fill="#ffffff" stroke="#00695c" strokeWidth="2"/>
      <circle cx="20" cy="22" r="2.1" fill="#00695c"/>
      <circle cx="32" cy="22" r="2.1" fill="#00695c"/>
      <circle cx="26" cy="28" r="2.1" fill="#00695c"/>
      <circle cx="20" cy="34" r="2.1" fill="#00695c"/>
      <circle cx="32" cy="34" r="2.1" fill="#00695c"/>
      <rect x="26" y="26" width="24" height="24" rx="5" fill="#00695c" stroke="#00695c" strokeWidth="2"/>
      <circle cx="32" cy="32" r="2.1" fill="#8bd8d1"/>
      <circle cx="44" cy="32" r="2.1" fill="#8bd8d1"/>
      <circle cx="32" cy="44" r="2.1" fill="#8bd8d1"/>
      <circle cx="44" cy="44" r="2.1" fill="#8bd8d1"/>
    </GiftBase>
  );
}
