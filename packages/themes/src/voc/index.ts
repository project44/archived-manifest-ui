export const borderWidths = {
  small: '0.0625rem',
  medium: '0.125px',
  large: '0.25rem',
};

export const colors = {
  shadow1: 'rgba(0, 0, 0, 0.01)',
  shadow2: 'rgba(0, 0, 0, 0.05)',
  neutral100: '#f3f3f5',
  neutral200: '#e4e5ea',
  neutral300: '#ced0d8',
  neutral400: '#a5aab7',
  neutral500: '#697187',
  neutral600: '#434d69',
  neutral700: '#303a52',
  neutral800: '#1f2535',
  neutral900: '#141822',
  neutral1000: '#141822',
  red100: '#f4cfcd',
  red200: '#eca9a5',
  red300: '#e3837d',
  red400: '#da5d55',
  red500: '#d44037',
  red600: '#b4362f',
  red700: '#942d27',
  red800: '#75231e',
  red900: '#551a16',
  red1000: '#551a16',
  orange100: '#fbe2cc',
  orange200: '#f7c699',
  orange300: '#f4a966',
  orange400: '#f08d33',
  orange500: '#ec7000',
  orange600: '#c95f00',
  orange700: '#a54e00',
  orange800: '#823e00',
  orange900: '#532700',
  orange1000: '#532700',
  yellow100: '#fff2ce',
  yellow200: '#ffe59d',
  yellow300: '#ffd86c',
  yellow400: '#ffcb3b',
  yellow500: '#ffbe0b',
  yellow600: '#cc9808',
  yellow700: '#a37907',
  yellow800: '#7a5b05',
  yellow900: '#5c4404',
  yellow1000: '#5c4404',
  green100: '#c3e1d2',
  green200: '#93c9ae',
  green300: '#62b08b',
  green400: '#329867',
  green500: '#0e864c',
  green600: '#0b6b3d',
  green700: '#095731',
  green800: '#074326',
  green900: '#06361e',
  green1000: '#06361e',
  teal100: '#c7dfdf',
  teal200: '#a5cccc',
  teal300: '#77b3b3',
  teal400: '#4a9999',
  teal500: '#1d8080',
  teal600: '#196d6d',
  teal700: '#145a5a',
  teal800: '#104646',
  teal900: '#0c3333',
  teal1000: '#0c3333',
  blue100: '#c9e1fb',
  blue200: '#95c5f8',
  blue300: '#62a9f4',
  blue400: '#308df1',
  blue500: '#0072ec',
  blue600: '#005cbe',
  blue700: '#00458e',
  blue800: '#003772',
  blue900: '#002956',
  blue1000: '#002956',
  purple100: '#d3c0e8',
  purple200: '#ac89d1',
  purple300: '#895aba',
  purple400: '#6933a3',
  purple500: '#4e148c',
  purple600: '#3e106f',
  purple700: '#310c57',
  purple800: '#260a45',
  purple900: '#1e0837',
  purple1000: '#1e0837',
  pink100: '#f5d2e2',
  pink200: '#eba8c7',
  pink300: '#e081ad',
  pink400: '#d65d95',
  pink500: '#cc3b7f',
  pink600: '#a32f65',
  pink700: '#7a234c',
  pink800: '#621c3d',
  pink900: '#49152e',
  pink1000: '#49152e',
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
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
};

export const lineHeights = {
  shorter: 1.25,
  short: 1.375,
  normal: 1.5,
  tall: 1.625,
  taller: 2,
};

export const opacities = {
  active: 0.12,
  disabled: 0.38,
  focus: 0.38,
  hover: 0.04,
  selected: 0.08,
};

export const radii = {
  small: '0.25rem',
  medium: '0.5rem',
  large: '2rem',
  xlarge: '4rem',
  full: '9999px',
};

export const shadows = {
  xsmall: `0px 1px 3px ${colors.shadow1}, 0px 0px 1px ${colors.shadow2}`,
  small: `0px 2px 4px ${colors.shadow1}, 0px 0px 1px ${colors.shadow2}`,
  medium: `0px 4px 8px ${colors.shadow1}, 0px 0px 1px ${colors.shadow2}`,
  large: `0px 8px 16px ${colors.shadow1}, 0px 0px 1px ${colors.shadow2}`,
  xlarge: `0px 16px 24px ${colors.shadow1}, 0px 0px 1px ${colors.shadow2}`,
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
  normal: '200ms',
  slow: '300ms',
};

const transitionTimingFunctions = {
  ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
};

export const zIndices = {
  hide: -1,
  base: 0,
  modal: 1400,
  popover: 1500,
};

export const theme = {
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacities,
  radii,
  shadows,
  space,
  transitionProperties,
  transitionDurations,
  transitionTimingFunctions,
  zIndices,
};

export default theme;
