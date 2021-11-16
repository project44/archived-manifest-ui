export const borderWidths = {
  small: '0.0625rem',
  medium: '0.125rem',
  large: '0.25rem',
};

export const colors = {
  shadow10: 'rgba(0, 0, 0, 0.01)',
  shadow20: 'rgba(0, 0, 0, 0.05)',
  neutral10: '#f3f3f5',
  neutral20: '#e4e5ea',
  neutral30: '#ced0d8',
  neutral40: '#a5aab7',
  neutral50: '#697187',
  neutral60: '#434d69',
  neutral70: '#303a52',
  neutral80: '#1f2535',
  neutral90: '#141822',
  neutral100: '#141822',
  red10: '#f4cfcd',
  red20: '#eca9a5',
  red30: '#e3837d',
  red40: '#da5d55',
  red50: '#d44037',
  red60: '#b4362f',
  red70: '#942d27',
  red80: '#75231e',
  red90: '#551a16',
  red100: '#551a16',
  orange10: '#fbe2cc',
  orange20: '#f7c699',
  orange30: '#f4a966',
  orange40: '#f08d33',
  orange50: '#ec7000',
  orange60: '#c95f00',
  orange70: '#a54e00',
  orange80: '#823e00',
  orange90: '#532700',
  orange100: '#532700',
  yellow10: '#fff2ce',
  yellow20: '#ffe59d',
  yellow30: '#ffd86c',
  yellow40: '#ffcb3b',
  yellow50: '#ffbe0b',
  yellow60: '#cc9808',
  yellow70: '#a37907',
  yellow80: '#7a5b05',
  yellow90: '#5c4404',
  yellow100: '#5c4404',
  green10: '#c3e1d2',
  green20: '#93c9ae',
  green30: '#62b08b',
  green40: '#329867',
  green50: '#0e864c',
  green60: '#0b6b3d',
  green70: '#095731',
  green80: '#074326',
  green90: '#06361e',
  green100: '#06361e',
  teal10: '#c7dfdf',
  teal20: '#a5cccc',
  teal30: '#77b3b3',
  teal40: '#4a9999',
  teal50: '#1d8080',
  teal60: '#196d6d',
  teal70: '#145a5a',
  teal80: '#104646',
  teal90: '#0c3333',
  teal100: '#0c3333',
  blue10: '#c9e1fb',
  blue20: '#95c5f8',
  blue30: '#62a9f4',
  blue40: '#308df1',
  blue50: '#0072ec',
  blue60: '#005cbe',
  blue70: '#00458e',
  blue80: '#003772',
  blue90: '#002956',
  blue100: '#002956',
  purple10: '#d3c0e8',
  purple20: '#ac89d1',
  purple30: '#895aba',
  purple40: '#6933a3',
  purple50: '#4e148c',
  purple60: '#3e106f',
  purple70: '#310c57',
  purple80: '#260a45',
  purple90: '#1e0837',
  purple100: '#1e0837',
  pink10: '#f5d2e2',
  pink20: '#eba8c7',
  pink30: '#e081ad',
  pink40: '#d65d95',
  pink50: '#cc3b7f',
  pink60: '#a32f65',
  pink70: '#7a234c',
  pink80: '#621c3d',
  pink90: '#49152e',
  pink100: '#49152e',
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
  light: 400,
  base: 500,
  heavy: 700,
};

export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  base: '0',
  wide: '0.025em',
  wider: '0.05em',
};

export const lineHeights = {
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
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
  1: '0.25rem',
  2: '0.5rem',
  3: '2rem',
  4: '4rem',
  full: '9999px',
};

export const shadows = {
  1: `0px 1px 3px ${colors.shadow10}, 0px 0px 1px ${colors.shadow20}`,
  2: `0px 2px 4px ${colors.shadow10}, 0px 0px 1px ${colors.shadow20}`,
  3: `0px 4px 8px ${colors.shadow10}, 0px 0px 1px ${colors.shadow20}`,
  4: `0px 8px 16px ${colors.shadow10}, 0px 0px 1px ${colors.shadow20}`,
  5: `0px 16px 24px ${colors.shadow10}, 0px 0px 1px ${colors.shadow20}`,
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
  fast: `${transitionDurations.fast} ${transitionTimingFunctions.ease}`,
  base: `${transitionDurations.base} ${transitionTimingFunctions.ease}`,
  slow: `${transitionDurations.slow} ${transitionTimingFunctions.ease}`,
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
  transitions,
  transitionProperties,
  transitionDurations,
  transitionTimingFunctions,
  zIndices,
};

export default theme;
