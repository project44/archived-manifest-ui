export const borderWidths = {
  small: '0.0625rem',
  medium: '0.125rem',
  large: '0.25rem',
};

export const colors = {
  // Palettes
  neutral1: '#f3f3f5',
  neutral2: '#e4e5ea',
  neutral3: '#ced0d8',
  neutral4: '#a5aab7',
  neutral5: '#697187',
  neutral6: '#434d69',
  neutral7: '#303a52',
  neutral8: '#1f2535',
  neutral9: '#141822',
  red1: '#f4cfcd',
  red2: '#eca9a5',
  red3: '#e3837d',
  red4: '#da5d55',
  red5: '#d44037',
  red6: '#b4362f',
  red7: '#942d27',
  red8: '#75231e',
  red9: '#551a16',
  orange1: '#fbe2cc',
  orange2: '#f7c699',
  orange3: '#f4a966',
  orange4: '#f08d33',
  orange5: '#ec7000',
  orange6: '#c95f00',
  orange7: '#a54e00',
  orange8: '#823e00',
  orange9: '#532700',
  yellow1: '#fff2ce',
  yellow2: '#ffe59d',
  yellow3: '#ffd86c',
  yellow4: '#ffcb3b',
  yellow5: '#ffbe0b',
  yellow6: '#cc9808',
  yellow7: '#a37907',
  yellow8: '#7a5b05',
  yellow9: '#5c4404',
  green1: '#c3e1d2',
  green2: '#93c9ae',
  green3: '#62b08b',
  green4: '#329867',
  green5: '#0e864c',
  green6: '#0b6b3d',
  green7: '#095731',
  green8: '#074326',
  green9: '#06361e',
  teal1: '#c7dfdf',
  teal2: '#a5cccc',
  teal3: '#77b3b3',
  teal4: '#4a9999',
  teal5: '#1d8080',
  teal6: '#196d6d',
  teal7: '#145a5a',
  teal8: '#104646',
  teal9: '#0c3333',
  blue1: '#c9e1fb',
  blue2: '#95c5f8',
  blue3: '#62a9f4',
  blue4: '#308df1',
  blue5: '#0072ec',
  blue6: '#005cbe',
  blue7: '#00458e',
  blue8: '#003772',
  blue9: '#002956',
  purple1: '#d3c0e8',
  purple2: '#ac89d1',
  purple3: '#895aba',
  purple4: '#6933a3',
  purple5: '#4e148c',
  purple6: '#3e106f',
  purple7: '#310c57',
  purple8: '#260a45',
  purple9: '#1e0837',
  pink1: '#f5d2e2',
  pink2: '#eba8c7',
  pink3: '#e081ad',
  pink4: '#d65d95',
  pink5: '#cc3b7f',
  pink6: '#a32f65',
  pink7: '#7a234c',
  pink8: '#621c3d',
  pink9: '#49152e',
  whiteA1: 'rgba(255, 255, 255, 0.01)',
  whiteA2: 'rgba(255, 255, 255, 0.04)',
  whiteA3: 'rgba(255, 255, 255, 0.08)',
  whiteA4: 'rgba(255, 255, 255, 0.16)',
  whiteA5: 'rgba(255, 255, 255, 0.24)',
  whiteA6: 'rgba(255, 255, 255, 0.36)',
  whiteA7: 'rgba(255, 255, 255, 0.48)',
  whiteA8: 'rgba(255, 255, 255, 0.64)',
  whiteA9: 'rgba(255, 255, 255, 0.80)',
  whiteA10: 'rgba(255, 255, 255, 0.92)',
  blackA1: 'rgba(0, 0, 0, 0.01)',
  blackA2: 'rgba(0, 0, 0, 0.04)',
  blackA3: 'rgba(0, 0, 0, 0.08)',
  blackA4: 'rgba(0, 0, 0, 0.16)',
  blackA5: 'rgba(0, 0, 0, 0.24)',
  blackA6: 'rgba(0, 0, 0, 0.36)',
  blackA7: 'rgba(0, 0, 0, 0.48)',
  blackA8: 'rgba(0, 0, 0, 0.64)',
  blackA9: 'rgba(0, 0, 0, 0.80)',
  blackA10: 'rgba(0, 0, 0, 0.92)',

  // Semantic
  hiContrast: '$neutral9',
  loContrast: 'white',
  shadowLow: '$blackA1',
  shadowHigh: '$blackA2',
};

export const fonts = {
  body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

export const fontSizes = {
  1: '0.6875rem',
  2: '0.75rem',
  3: '0.875rem',
  4: '1rem',
  5: '1.125rem',
  6: '1.25rem',
  7: '1.5rem',
  8: '1.875rem',
  9: '2.375rem',
};

export const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const letterSpacings = {
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
};

export const lineHeights = {
  short: 1.25,
  base: 1.5,
};

export const radii = {
  small: '0.25rem',
  medium: '0.5rem',
  large: '2rem',
  xlarge: '4rem',
  full: '9999px',
};

export const shadows = {
  xsmall: '0px 1px 3px $colors$shadowLow, 0px 0px 1px $colors$shadowHigh',
  small: '0px 2px 4px $colors$shadowLow, 0px 0px 1px $colors$shadowHigh',
  medium: '0px 4px 8px $colors$shadowLow, 0px 0px 1px $colors$shadowHigh',
  large: '0px 8px 16px $colors$shadowLow, 0px 0px 1px $colors$shadowHigh',
  xlarge: '0px 16px 24px $colors$shadowLow, 0px 0px 1px $colors$shadowHigh',
};

export const space = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.5rem',
  6: '2rem',
  7: '3rem',
  8: '4rem',
  9: '6rem',
  10: '8rem',
  11: '12rem',
};

const transitionProperties = {
  common:
    'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
  colors: 'background-color, border-color, color, fill, stroke',
};

const transitionDurations = {
  fast: '125ms',
  base: '200ms',
  slow: '300ms',
};

const transitionTimingFunctions = {
  ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
};

const transitions = {
  ...transitionDurations,
  ...transitionTimingFunctions,
};

export const zIndices = {
  hide: -1,
  base: 0,
  modal: 1400,
  popover: 1500,
};

export const lightTheme = {
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  space,
  transitions,
  transitionProperties,
  transitionDurations,
  transitionTimingFunctions,
  zIndices,
};

export const darkTheme = {
  colors: {
    hiContrast: '$neutral90',
    loContrast: '$neutral10',
    shadowLow: 'rgba(0, 0, 0, 0.94)',
    shadowHigh: 'rgba(0, 0, 0, 0.9)',
  },
};

export default lightTheme;
