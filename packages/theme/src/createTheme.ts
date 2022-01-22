import { Theme, ThemeOptions } from './types';
import { defaultTheme } from './defaultTheme';
import merge from 'lodash.merge';

export function createTheme<T extends Partial<ThemeOptions>>(theme: T): Theme {
  return merge(defaultTheme as T, theme) as Theme;
}
