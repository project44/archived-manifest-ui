import merge from 'lodash.merge';
import baseTheme from './base';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export const createTheme = (theme?: DeepPartial<typeof baseTheme>) => {
  if (!theme) return baseTheme;

  return merge(baseTheme, theme);
};
