export function isNumeric(value: string | number) {
  return /^-?\d+$/.test(value + '');
}