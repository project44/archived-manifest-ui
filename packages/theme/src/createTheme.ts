import { defaultTheme } from '@manifest-ui/themes';
import { mergeTheme } from './mergeTheme';
import { ThemeInput } from './types';

export function createTheme(theme?: ThemeInput) {
  if (process.env.NODE_ENV !== 'production' && theme?.colors?.secondary) {
    console.error('Manifest UI: overriding the secondary color is currently not supported.');
  }

  return mergeTheme(defaultTheme, theme);
}
