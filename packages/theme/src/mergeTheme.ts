import merge from 'deepmerge';
import { Theme } from '@manifest-ui/styled-system';
import { ThemeInput } from './types';

/**
 * Deeply merge theme values.
 *
 * If the value is an array, we cannot concatenate arrays as that will break
 * responsive property values. Instead we pick the last array if available falling
 * back to original array value from the default theme.
 */
export function mergeTheme(theme: Theme, themeInput?: ThemeInput): Theme {
  if (!themeInput) return theme;

  return merge(theme, themeInput, {
    arrayMerge: (leftArray: unknown[], rightArray: unknown[]) => rightArray || leftArray,
  }) as Theme;
}
