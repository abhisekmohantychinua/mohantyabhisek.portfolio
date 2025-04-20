export type Theme = 'light' | 'dark';

export function isValidTheme(value: string): value is Theme {
  return value === 'light' || value === 'dark';
}
