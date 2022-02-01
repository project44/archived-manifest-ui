export const BREAKPOINTS = ['37.5rem', '64rem', '80rem', '120rem'];

export const MEDIA_QUERIES = {
  small: `@media screen and (min-width: ${BREAKPOINTS[1]})`,
  medium: `@media screen and (min-width: ${BREAKPOINTS[2]})`,
  large: `@media screen and (min-width: ${BREAKPOINTS[3]})`,
  'x-large': `@media screen and (min-width: ${BREAKPOINTS[4]})`,
};

export const responsive = {
  breakpoints: BREAKPOINTS,
  mediaQueries: MEDIA_QUERIES,
};
