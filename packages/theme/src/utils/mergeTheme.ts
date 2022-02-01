import { PartialTheme, Theme } from '../types';
import merge from 'deepmerge';

/**
 * Deeply merge theme values.
 *
 * If the value is an array, we cannot concatenate arrays as that will break
 * responsive property values. Instead we pick the last array if available falling
 * back to original array value from the default theme.
 */
export function mergeTheme(defaultTheme: Theme, themeInput?: PartialTheme): Theme {
  if (!themeInput) return defaultTheme;

  return merge(defaultTheme, themeInput, {
    arrayMerge: (leftArray: unknown[], rightArray: unknown[]) => rightArray || leftArray,
  }) as Theme;
}
