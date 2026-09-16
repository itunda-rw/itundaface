let counter = 0;

/** Returns a deterministic-per-instance prefix for inline SVG definitions. */
export function createItundaFaceId(prefix: string): string {
  counter += 1;
  return `itdf-${prefix}-${counter}`;
}
