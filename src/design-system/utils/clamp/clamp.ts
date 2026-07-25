export function clamp(min: number, preferred: number, max: number): string {
  return `clamp(${min}rem, ${preferred}vw, ${max}rem)`;
}
