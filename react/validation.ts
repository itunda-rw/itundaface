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

export function isSupportedFlatSize(size: number): size is typeof ITUNDA_FACE_FLAT_SIZES[number] {
  return (ITUNDA_FACE_FLAT_SIZES as readonly number[]).includes(size);
}

export function isSupported3DSize(size: number): size is typeof ITUNDA_FACE_3D_SIZES[number] {
  return (ITUNDA_FACE_3D_SIZES as readonly number[]).includes(size);
}
