export const borderWidths = {
  small: '1px',
  medium: '2px',
  large: '4px',
};

export const borders = {
  small: `${borderWidths.small} solid`,
  medium: `${borderWidths.medium} solid`,
  large: `${borderWidths.large} solid`,
};

export const colors = {
  grey100: '#fbfbfb',
  grey200: '#f6f6f6',
  grey300: '#eeeeee',
  grey400: '#cccccc',
  grey500: '#999999',
  grey600: '#555555',
  grey700: '#493e3f',
  grey800: '#3d2a2e',
  grey900: '#311b20',
  grey1000: '#281018',
  red100: '#fdf2ed',
  red200: '#fbded1',
  red300: '#f8b6a4',
  red400: '#ec8373',
  red500: '#d9544e',
  red600: '#c11d25',
  red700: '#a51529',
  red800: '#8a0e2a',
  red900: '#6f0929',
  red1000: '#5c0528',
  orange100: '#fffaeb',
  orange200: '#fef2cb',
  orange300: '#fee198',
  orange400: '#fdcc65',
  orange500: '#fbb73e',
  orange600: '#f99500',
  orange700: '#d67700',
  orange800: '#b35c00',
  orange900: '#904400',
  orange1000: '#773400',
  green100: '#f5fdef',
  green200: '#e4fbd4',
  green300: '#c5f7aa',
  green400: '#99e87c',
  green500: '#6ed258',
  green600: '#37b529',
  green700: '#209b1d',
  green800: '#14821b',
  green900: '#0d681a',
  green1000: '#075619',
  teal100: '#eafdfa',
  teal200: '#c8fbf2',
  teal300: '#94f7ed',
  teal400: '#5ce7e4',
  teal500: '#34c8d0',
  teal600: '#009ab2',
  teal700: '#007899',
  teal800: '#005a80',
  teal900: '#004067',
  teal1000: '#002f55',
  blue100: '#eef7ff',
  blue200: '#d2eafe',
  blue300: '#a1cdfe',
  blue400: '#78b4fa',
  blue500: '#5699f5',
  blue600: '#2170ef',
  blue700: '#1856cd',
  blue800: '#1040ac',
  blue900: '#0a2c8a',
  blue1000: '#061e72',
  lilac100: '#fefafd',
  lilac200: '#fcf2fa',
  lilac300: '#f9e7f7',
  lilac400: '#ecd3ec',
  lilac500: '#d8bddb',
  lilac600: '#bda0c3',
  lilac700: '#9b74a7',
  lilac800: '#79508c',
  lilac900: '#583371',
  lilac1000: '#3f1e5d',
  eggplant100: '#f6f1fb',
  eggplant200: '#e8dbf5',
  eggplant300: '#d1b9eb',
  eggplant400: '#a285c4',
  eggplant500: '#69528a',
  eggplant600: '#281c3c',
  eggplant700: '#231935',
  eggplant800: '#201630',
  eggplant900: '#1b1329',
  eggplant1000: '#181024',
  purple100: '#fdf2fb',
  purple200: '#f9def5',
  purple300: '#f4bff0',
  purple400: '#de97df',
  purple500: '#b872bf',
  purple600: '#884595',
  purple700: '#6d3280',
  purple800: '#54226b',
  purple900: '#3d1656',
  purple1000: '#2c0d47',
};

export const fonts = {
  body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

export const fontSizes = {
  1: '0.625rem',
  2: '0.75rem',
  3: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '2.125rem',
  7: '1.5rem', // ?
  8: '1.875rem', // ?
  9: '2.375rem', // ?
};

export const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600, // ?
  bold: 700,
};

export const letterSpacings = {
  tighter: 0,
  tight: '0.1px',
  normal: '0.15px',
  wide: '0.25px',
  wider: 1,
};

export const lineHeights = {
  shorter: '12px',
  short: '16px',
  normal: '20px',
  tall: '24px',
  taller: '40px',
};

export const opacities = {
  active: 0.12,
  disabled: 0.38,
  focus: 0.38,
  hover: 0.04,
  selected: 0.08,
};

export const radii = {
  small: '2px',
  medium: '4px',
  large: '8px',
  xlarge: '16px',
  full: 9999,
};

export const shadows = {
  xsmall: 'none',
  small: 'none',
  medium: '0px 2px 8px rgba(0, 0, 0, 0.25)',
  large: '0px 4px 8px rgba(0, 0, 0, 0.12)',
  xlarge: '0px 0px 8px rgba(0, 0, 0, 0.12), 0px 8px 8px rgba(0, 0, 0, 0.24)',
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

const transitions = {
  fast: `${transitionDurations.fast} ${transitionTimingFunctions.ease}`,
  normal: `${transitionDurations.normal} ${transitionTimingFunctions.ease}`,
  slow: `${transitionDurations.slow} ${transitionTimingFunctions.ease}`,
};

export const zIndices = {
  hide: -1,
  base: 0,
  modal: 1400,
  popover: 1500,
};

export const theme = {
  borders,
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
  zIndices,
};

export default theme;
