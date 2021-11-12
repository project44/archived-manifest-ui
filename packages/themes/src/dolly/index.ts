export const borderWidths = {
  small: '0.0625rem',
  medium: '0.125rem',
  large: '0.25rem',
};

export const colors = {
  shadow10: 'rgba(0, 0, 0, 0.12)',
  shadow20: 'rgba(0, 0, 0, 0.24)',
  neutral10: '#fbfbfb',
  neutral20: '#f6f6f6',
  neutral30: '#eeeeee',
  neutral40: '#cccccc',
  neutral50: '#999999',
  neutral60: '#555555',
  neutral70: '#493e3f',
  neutral80: '#3d2a2e',
  neutral90: '#311b20',
  neutral100: '#281018',
  red10: '#fdf2ed',
  red20: '#fbded1',
  red30: '#f8b6a4',
  red40: '#ec8373',
  red50: '#d9544e',
  red60: '#c11d25',
  red70: '#a51529',
  red80: '#8a0e2a',
  red90: '#6f0929',
  red100: '#5c0528',
  orange10: '#fffaeb',
  orange20: '#fef2cb',
  orange30: '#fee198',
  orange40: '#fdcc65',
  orange50: '#fbb73e',
  orange60: '#f99500',
  orange70: '#d67700',
  orange80: '#b35c00',
  orange90: '#904400',
  orange100: '#773400',
  green10: '#f5fdef',
  green20: '#e4fbd4',
  green30: '#c5f7aa',
  green40: '#99e87c',
  green50: '#6ed258',
  green60: '#37b529',
  green70: '#209b1d',
  green80: '#14821b',
  green90: '#0d681a',
  green100: '#075619',
  teal10: '#eafdfa',
  teal20: '#c8fbf2',
  teal30: '#94f7ed',
  teal40: '#5ce7e4',
  teal50: '#34c8d0',
  teal60: '#009ab2',
  teal70: '#007899',
  teal80: '#005a80',
  teal90: '#004067',
  teal100: '#002f55',
  blue10: '#eef7ff',
  blue20: '#d2eafe',
  blue30: '#a1cdfe',
  blue40: '#78b4fa',
  blue50: '#5699f5',
  blue60: '#2170ef',
  blue70: '#1856cd',
  blue80: '#1040ac',
  blue90: '#0a2c8a',
  blue100: '#061e72',
  lilac10: '#fefafd',
  lilac20: '#fcf2fa',
  lilac30: '#f9e7f7',
  lilac40: '#ecd3ec',
  lilac50: '#d8bddb',
  lilac60: '#bda0c3',
  lilac70: '#9b74a7',
  lilac80: '#79508c',
  lilac90: '#583371',
  lilac100: '#3f1e5d',
  eggplant10: '#f6f1fb',
  eggplant20: '#e8dbf5',
  eggplant30: '#d1b9eb',
  eggplant40: '#a285c4',
  eggplant50: '#69528a',
  eggplant60: '#281c3c',
  eggplant70: '#231935',
  eggplant80: '#201630',
  eggplant90: '#1b1329',
  eggplant100: '#181024',
  purple10: '#fdf2fb',
  purple20: '#f9def5',
  purple30: '#f4bff0',
  purple40: '#de97df',
  purple50: '#b872bf',
  purple60: '#884595',
  purple70: '#6d3280',
  purple80: '#54226b',
  purple90: '#3d1656',
  purple100: '#2c0d47',
};

export const fonts = {
  body: 'proxima-nova, sans-serif',
  mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

export const fontSizes = {
  1: '0.625rem',
  2: '0.75rem',
  3: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '2.125rem',
  7: '2.125rem', // ?
  8: '2.125rem', // ?
  9: '2.125rem', // ?
};

export const fontWeights = {
  light: 400,
  base: 700,
  heavy: 700,
};

export const letterSpacings = {
  tighter: 0,
  tight: '0.1px',
  base: '0.15px',
  wide: '0.25px',
  wider: 1,
};

// Convert to relative unit?
export const lineHeights = {
  shorter: '12px',
  short: '16px',
  base: '20px',
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
  small: '0.125rem',
  medium: '0.25rem',
  large: '0.5rem',
  xlarge: '1rem',
  full: 9999,
};

export const shadows = {
  xsmall: 'none', // ?
  small: 'none', // ?
  medium: `0px 2px 8px ${colors.shadow20}`,
  large: `0px 4px 8px ${colors.shadow10}`,
  xlarge: `0px 0px 8px ${colors.shadow10}, 0px 8px 8px ${colors.shadow20}`,
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

// Scale or named?
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
  transitionDurations,
  transitionTimingFunctions,
  transitionProperties,
  zIndices,
};

export default theme;
