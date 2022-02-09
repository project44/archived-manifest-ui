import { Theme } from '@manifest-ui/styled-system';

export function gradient(theme?: Theme) {
  if (!theme) return '';

  const primary = theme.colors?.primary;
  const secondary = theme.colors?.secondary;

  if (!primary || !secondary) return '';

  return `linear-gradient(90deg, ${primary[500] as string} 0%, ${
    secondary[900] as string
  } 163.65%, ${secondary[500] as string} 191.59%)`;
}

export function gradientHover(theme?: Theme) {
  return `linear-gradient(0deg, rgba(10, 21, 33, 0.2), rgba(10, 21, 33, 0.2)), ${gradient(theme)}`;
}

export function gradientFocus(theme?: Theme) {
  return `linear-gradient(0deg, rgba(10, 21, 33, 0.4), rgba(10, 21, 33, 0.4)), ${gradient(theme)}`;
}

export function gradientActive(theme?: Theme) {
  return `linear-gradient(0deg, rgba(10, 21, 33, 0.6), rgba(10, 21, 33, 0.6)), ${gradient(theme)}`;
}
