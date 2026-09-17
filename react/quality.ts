export const ITUNDA_FACE_CANVAS = { width: 80, height: 80 } as const;

export const ITUNDA_FACE_OPTICAL_RULES = {
  targetFillRatio: 0.78,
  minimumFillRatio: 0.68,
  maximumFillRatio: 0.88,
  minimumReadableSize: 14,
  balancedCheckSize: 24,
} as const;

export const ITUNDA_FACE_DIRECTION_RULES = {
  readingFlow: 'left-to-right',
  directionalObjectsFace: 'right',
  defaultTiltDegrees: 45,
  tiltDirection: 'clockwise',
} as const;

export const ITUNDA_FACE_3D_RULES = {
  camera: 'consistent-medium-front-biased',
  lightDirection: 'top-left',
  shadowDirection: 'down',
  groundShadow: 'soft-minimal',
  flat3dSilhouetteMustMatch: true,
} as const;

export const ITUNDA_FACE_CONSTRUCTION_RULES = {
  primitives: ['circle', 'line', 'controlled-curve'] as const,
  avoidFreeformCurvesWhenEquivalentPrimitiveExists: true,
  removeDetailsThatDoNotSurviveAt14px: true,
  semanticColorBeforeBrandAccent: true,
  compactPalette: true,
  lightAndDarkSurfaceReadable: true,
} as const;

export const ITUNDA_FACE_QUALITY_GATES = [
  'silhouette-first',
  'optical-size',
  'minimum-size-legibility',
  'direction-consistency',
  '45-degree-angle-consistency',
  'single-system-palette',
  'flat-3d-silhouette-parity',
  'family-anatomy-consistency',
  'light-dark-readability',
  'accessibility',
  'canonical-svg-react-parity',
  'original-artwork',
] as const;

export type ItundaFaceQualityGate = typeof ITUNDA_FACE_QUALITY_GATES[number];

export function isOpticallyBalanced(fillRatio: number): boolean {
  return fillRatio >= ITUNDA_FACE_OPTICAL_RULES.minimumFillRatio &&
    fillRatio <= ITUNDA_FACE_OPTICAL_RULES.maximumFillRatio;
}

export function isPreferredFlatSize(size: number): boolean {
  return size >= ITUNDA_FACE_OPTICAL_RULES.minimumReadableSize && size <= ITUNDA_FACE_OPTICAL_RULES.balancedCheckSize;
}
