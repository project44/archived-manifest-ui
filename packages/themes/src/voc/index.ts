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
  neutral100: '#F3F3F5',
  neutral200: '#E4E5EA',
  neutral300: '#CED0D8',
  neutral400: '#A5AAB7',
  neutral500: '#697187',
  neutral600: '#434D69',
  neutral700: '#303A52',
  neutral800: '#1F2535',
  neutral900: '#141822',
  neutral1000: '#141822',
  red100: '#F4CFCD',
  red200: '#ECA9A5',
  red300: '#E3837D',
  red400: '#DA5D55',
  red500: '#D44037',
  red600: '#B4362F',
  red700: '#942D27',
  red800: '#75231E',
  red900: '#551A16',
  red1000: '#551A16',
  orange100: '#FBE2CC',
  orange200: '#F7C699',
  orange300: '#F4A966',
  orange400: '#F08D33',
  orange500: '#EC7000',
  orange600: '#C95F00',
  orange700: '#A54E00',
  orange800: '#823E00',
  orange900: '#532700',
  orange1000: '#532700',
  yellow100: '#FFF2CE',
  yellow200: '#FFE59D',
  yellow300: '#FFD86C',
  yellow400: '#FFCB3B',
  yellow500: '#FFBE0B',
  yellow600: '#CC9808',
  yellow700: '#A37907',
  yellow800: '#7A5B05',
  yellow900: '#5C4404',
  yellow1000: '#5C4404',
  green100: '#C3E1D2',
  green200: '#93C9AE',
  green300: '#62B08B',
  green400: '#329867',
  green500: '#0E864C',
  green600: '#0B6B3D',
  green700: '#095731',
  green800: '#074326',
  green900: '#06361E',
  green1000: '#06361E',
  teal100: '#C7DFDF',
  teal200: '#A5CCCC',
  teal300: '#77B3B3',
  teal400: '#4A9999',
  teal500: '#1D8080',
  teal600: '#196D6D',
  teal700: '#145A5A',
  teal800: '#104646',
  teal900: '#0C3333',
  teal1000: '#0C3333',
  blue100: '#C9E1FB',
  blue200: '#95C5F8',
  blue300: '#62A9F4',
  blue400: '#308DF1',
  blue500: '#0072EC',
  blue600: '#005CBE',
  blue700: '#00458E',
  blue800: '#003772',
  blue900: '#002956',
  blue1000: '#002956',
  purple100: '#D3C0E8',
  purple200: '#AC89D1',
  purple300: '#895ABA',
  purple400: '#6933A3',
  purple500: '#4E148C',
  purple600: '#3E106F',
  purple700: '#310C57',
  purple800: '#260A45',
  purple900: '#1E0837',
  purple1000: '#1E0837',
  pink100: '#F5D2E2',
  pink200: '#EBA8C7',
  pink300: '#E081AD',
  pink400: '#D65D95',
  pink500: '#CC3B7F',
  pink600: '#A32F65',
  pink700: '#7A234C',
  pink800: '#621C3D',
  pink900: '#49152E',
  pink1000: '#49152E',
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
  full: 9999,
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
  transitionDurations,
  transitionTimingFunctions,
  zIndices,
};

export default theme;
