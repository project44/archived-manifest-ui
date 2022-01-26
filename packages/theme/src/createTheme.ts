import { defaultTheme } from './defaultTheme';
import merge from 'lodash.merge';
import { Theme } from './types';

export function createTheme<T extends Partial<Theme>>(theme: T): Theme {
  return merge(defaultTheme as T, theme) as Theme;
}
