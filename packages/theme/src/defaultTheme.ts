import { Theme } from './types';

const breakpoints = ['600px', '1024px', '1280px', '1920px'];

export const defaultTheme: Theme = {
  breakpoints,
  borderWidths: {
    'x-small': 1,
    small: 2,
    medium: 3,
    large: 4,
    'x-large': 6,
  },
  colors: {
    accent: '#8C18E2',
    active: '#005CBE',
    background: '#FFFFFF',
    backgroundContrast: '#FAFAFB',
    black: '#000000',
    border: '#D5D7D9',
    focus: '#95C5F8',
    hover: '#00458E',
    primary: '#0072EC',
    text: '#0A1521',
    textContrast: '#0A1521',
    white: '#FFFFFF',
  },
  direction: 'ltr',
  fonts: {
    body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    heading: '',
    mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },
  fontSizes: {
    1: '32px',
    2: '28px',
    3: '24px',
    4: '20px',
    5: '18px',
    6: '16px',
    7: '14px',
    8: '12px',
    9: '10px',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacings: {
    tighter: '-0.02em',
    tight: '-0.01em',
    normal: '0.02em',
    wide: '0.04em',
  },
  lineHeights: {
    1: '40px',
    2: '32px',
    3: '24px',
    4: '16px',
    5: '14px',
  },
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[1]})`,
    medium: `@media screen and (min-width: ${breakpoints[2]})`,
    large: `@media screen and (min-width: ${breakpoints[3]})`,
    'x-large': `@media screen and (min-width: ${breakpoints[4]})`,
  },
  mode: 'light',
  radii: {
    none: 0,
    small: 2,
    medium: 2,
    large: 2,
    full: 9999,
  },
  shadow: {
    none: 'none',
    small: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3',
    medium: '0px 2px 10px 4px rgba(0, 0, 0, 0.1), 5px 10px 10px rgba(0, 0, 0, 0.1)',
    large: '',
    'x-large': '',
  },
  sizes: {
    'xxx-small': '',
    'xx-small': '',
    'x-small': '',
    small: '',
    'xxx-medium': '',
    'xx-medium': '',
    'x-medium': '',
    medium: '',
    'xxx-large': '',
    'xx-large': '',
    'x-large': '',
    large: '',
  },
  space: {
    'x-small': '4px',
    small: '4px',
    medium: '8px',
    large: '12px',
    'x-large': '16px',
    'xx-large': '20px',
    'xxx-large': '40px',
  },
  zIndices: {
    dropdown: 1000,
    sticky: 1100,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    toast: 1700,
    tooltip: 1800,
  },
};
