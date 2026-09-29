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

export const ITUNDA_FACE_ANATOMY_RULES = {
  basePrimitives: ['circle', 'line', 'controlled-curve'] as const,
  preferredCornerLanguage: 'soft-rounded',
  strokeLanguage: 'uniform-optical-weight',
  faceFeatureAlignment: 'shared-baseline-and-center',
  repeatedFeatureScale: 'family-consistent',
  eyeSpacing: 'optically-equal',
  mouthPlacement: 'centered-to-expression',
  exceptionPolicy: 'semantic-exception-must-be-documented',
} as const;

export const ITUNDA_FACE_COLOR_RULES = {
  brand: '#7472F4',
  brandRole: 'identity-accent',
  semanticPriority: ['meaning', 'surface-contrast', 'brand-accent'] as const,
  surfaceModes: ['light', 'dark'] as const,
  compactPalette: true,
} as const;

export const ITUNDA_FACE_CONSTRUCTION_RULES = {
  primitives: ITUNDA_FACE_ANATOMY_RULES.basePrimitives,
  avoidFreeformCurvesWhenEquivalentPrimitiveExists: true,
  removeDetailsThatDoNotSurviveAt14px: true,
  semanticColorBeforeBrandAccent: true,
  compactPalette: true,
  lightAndDarkSurfaceReadable: true,
  minimumTextContrastRatio: 4.5,
  minimumLargeTextContrastRatio: 3,
  reducedMotionSupported: true,
  namespaced3dSvgIds: true,
} as const;

export const ITUNDA_FACE_QUALITY_GATES = [
  'silhouette-first',
  'optical-size',
  'minimum-size-legibility',
  'direction-consistency',
  '45-degree-angle-consistency',
  'single-system-palette',
  'family-anatomy-consistency',
  'semantic-color-priority',
  'flat-3d-silhouette-parity',
  'light-dark-readability',
  'accessibility',
  'contrast-thresholds',
  'reduced-motion',
  'canonical-svg-react-parity',
  '3d-svg-id-uniqueness',
  'original-artwork',
] as const;

export type ItundaFaceQualityGate = typeof ITUNDA_FACE_QUALITY_GATES[number];

export function isOpticallyBalanced(fillRatio: number): boolean {
  return fillRatio >= ITUNDA_FACE_OPTICAL_RULES.minimumFillRatio &&
    fillRatio <= ITUNDA_FACE_OPTICAL_RULES.maximumFillRatio;
}

export function isPreferredFlatSize(size: number): boolean {
  return size >= ITUNDA_FACE_OPTICAL_RULES.minimumReadableSize &&
    size <= ITUNDA_FACE_OPTICAL_RULES.balancedCheckSize;
}
