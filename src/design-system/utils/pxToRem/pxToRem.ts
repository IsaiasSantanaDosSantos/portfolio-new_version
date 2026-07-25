export function pxToRem(pixels: number, base = 16): string {
  return `${pixels / base}rem`;
}
