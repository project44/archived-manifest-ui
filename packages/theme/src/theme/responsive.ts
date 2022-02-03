export type MediaQueries = 'small' | 'medium' | 'large' | 'x-large';

export const breakpoints: Array<string | number> = ['37.5rem', '64rem', '80rem', '120rem'];

export const mediaQueries: Record<MediaQueries, string> = {
  small: `@media screen and (min-width: ${breakpoints[1]})`,
  medium: `@media screen and (min-width: ${breakpoints[2]})`,
  large: `@media screen and (min-width: ${breakpoints[3]})`,
  'x-large': `@media screen and (min-width: ${breakpoints[4]})`,
};
