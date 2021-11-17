import { createTheme } from '../createTheme';

export const colors = {
  shadow10: 'rgba(0, 0, 0, 0.12)',
  shadow20: 'rgba(0, 0, 0, 0.24)',
  neutral10: '#f5f8fa',
  neutral20: '#ebf0f3',
  neutral30: '#e5eaee',
  neutral40: '#c2cbcc',
  neutral50: '#859198',
  neutral60: '#616A70',
  neutral70: '#343741',
  neutral80: '#171d26',
  red10: '#f8e0e1',
  red20: '#f3c7c9',
  red40: '#d31315',
  purple100: '#f6f1ff',
  purple600: '#6D1F80',
  orange10: '#ffe7d9',
  orange20: '#ffc9aa',
  orange40: '#fd5f00',
  orange50: '#e86929',
  amber400: '#ffcf3d',
  yellow10: '#fff1df',
  yellow20: '#fddeb5',
  yellow30: '#edde0',
  yellow40: '#f7b500',
  yellow50: '#fd9f28',
  green10: '#edf8ed',
  green20: '#cef1ce',
  green40: '#4ab653',
  teal600: '#008e86',
  blue10: '#e6eff8',
  blue20: '#ccdef1',
  blue30: '#80a9e5',
  blue40: '#5893d4',
  blue60: '#2970be',
  blue70: '#345fed',
  blue80: '#2e3e55',
};

export const fontSizes = {
  1: '0.625rem',
  2: '0.75rem',
  3: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '2.125rem',
  8: '3rem',
  9: '3.75rem',
};

export const fontWeights = {
  light: 400,
  base: 600,
  heavy: 700,
};

export const letterSpacings = {
  tighter: '0',
  tight: '0.1px',
  base: '0.15px',
  wide: '0.25px',
  wider: '1',
};

export const radii = {
  small: '0.125rem',
  medium: '0.25rem',
  large: '0.4375rem',
};

export const shadows = {
  small: `rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px`,
  medium: `rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px`,
  large: `rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px`,
};

export const theme = createTheme({
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  radii,
  shadows,
});

export default theme;
