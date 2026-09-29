export const ITUNDA_FACE_FLAT_SIZES = [14, 16, 18, 20, 24] as const;
export const ITUNDA_FACE_3D_SIZES = [32, 40, 48, 64] as const;

export const ITUNDA_FACE_FAMILIES = [
  'reactions',
  'communication',
  'places',
  'identity',
  'commerce',
  'finance',
  'culture',
  'state',
] as const;

export type ItundaFaceFamily = typeof ITUNDA_FACE_FAMILIES[number];

export const ITUNDA_FACE_CONTRAST = {
  normalTextMinimum: 4.5,
  largeTextMinimum: 3,
} as const;

export const ITUNDA_FACE_MANIFEST = {
  version: '2.2.4',
  canvas: { width: 80, height: 80 },
  brandColor: '#7472F4',
  flatSizes: ITUNDA_FACE_FLAT_SIZES,
  threeDSizes: ITUNDA_FACE_3D_SIZES,
  families: ITUNDA_FACE_FAMILIES,
  direction: 'right',
  defaultTiltDegrees: 45,
  opticalFillRatio: { minimum: 0.68, target: 0.78, maximum: 0.88 },
  contrast: ITUNDA_FACE_CONTRAST,
  threeD: {
    camera: 'consistent-medium-front-biased',
    lightDirection: 'top-left',
    shadowDirection: 'down',
    silhouetteParity: true,
  },
  accessibility: {
    reducedMotion: true,
    semanticRole: 'img',
    requiresAccessibleLabel: true,
  },
  identity: {
    originalArtwork: true,
    rwandaNativeVocabulary: true,
    brandAccentIsIdentityOnly: true,
  },
} as const;

export function isSupportedFlatSize(size: number): size is typeof ITUNDA_FACE_FLAT_SIZES[number] {
  return (ITUNDA_FACE_FLAT_SIZES as readonly number[]).includes(size);
}

export function isSupported3DSize(size: number): size is typeof ITUNDA_FACE_3D_SIZES[number] {
  return (ITUNDA_FACE_3D_SIZES as readonly number[]).includes(size);
}

export function meetsTextContrast(ratio: number, largeText = false): boolean {
  return ratio >= (largeText ? ITUNDA_FACE_CONTRAST.largeTextMinimum : ITUNDA_FACE_CONTRAST.normalTextMinimum);
}

export function isCanonicalFlatSize(size: number): boolean {
  return isSupportedFlatSize(size) && size >= ITUNDA_FACE_FLAT_SIZES[0];
}

export function isCanonical3DSize(size: number): boolean {
  return isSupported3DSize(size) && size >= ITUNDA_FACE_3D_SIZES[0];
}
