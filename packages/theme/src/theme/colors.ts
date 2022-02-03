import * as CSS from 'csstype';

export type Background = 'body' | 'card' | 'footer' | 'header';

export type Color = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type Emphasis = 'disabled' | 'primary' | 'secondary' | 'tertiary';

export type Fill =
  | 'blue'
  | 'brown'
  | 'cerulean'
  | 'cyan'
  | 'green'
  | 'indigo'
  | 'mint'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'yellow';

export type Gradient = 'gradient-0' | 'gradient-20' | 'gradient-40' | 'gradient-60';

export type Status = 'danger' | 'success' | 'warning';

export const black: CSS.Property.Color = '#000000';

export const background: Record<Background, CSS.Property.Color> = {
  body: '#FFFFFF',
  card: '',
  footer: '',
  header: '',
};

export const border: CSS.Property.Color = '#D5D7D9';

export const emphasis: Record<Emphasis, CSS.Property.Color> = {
  disabled: 'rgba(10, 21, 33, 0.32)',
  primary: '#0A1521',
  secondary: '#80858C',
  tertiary: '#49515A',
};

export const fill: Record<Fill, Record<Color, CSS.Property.Color>> = {
  blue: {
    50: '#e1f5fd',
    100: '#b3e5fb',
    200: '#81d3f8',
    300: '#4fc2f4',
    400: '#29b5f2',
    500: '#00a8f0',
    600: '#009ae1',
    700: '#0087cd',
    800: '#0076b9',
    900: '#005698',
  },

  brown: {
    50: '#faf0e7',
    100: '#ead9ce',
    200: '#d8c1b2',
    300: '#c4a794',
    400: '#b3917b',
    500: '#a27c62',
    600: '#95715a',
    700: '#84634f',
    800: '#755646',
    900: '#64473a',
  },

  cerulean: {
    50: '#e8eaf6',
    100: '#c4cbe8',
    200: '#9daad9',
    300: '#7688c9',
    400: '#586ebe',
    500: '#3855b3',
    600: '#324da9',
    700: '#28439d',
    800: '#203991',
    900: '#10277c',
  },

  cyan: {
    50: '#e0f7f8',
    100: '#b1eced',
    200: '#7fdfe2',
    300: '#4ad1d7',
    400: '#1cc7d0',
    500: '#00bdcb',
    600: '#00adb8',
    700: '#00989f',
    800: '#008488',
    900: '#00605e',
  },

  green: {
    50: '#ddefe6',
    100: '#c3e1d2',
    200: '#93c9ae',
    300: '#62b08b',
    400: '#329867',
    500: '#0e864c',
    600: '#0b6b3d',
    700: '#095731',
    800: '#074326',
    900: '#06361e',
  },

  indigo: {
    50: '#eaeafd',
    100: '#caccf7',
    200: '#a7acf2',
    300: '#828aed',
    400: '#666ee8',
    500: '#4a4de6',
    600: '#4544da',
    700: '#3c38ce',
    800: '#342bc2',
    900: '#250db0',
  },

  mint: {
    50: '#E0F6F2',
    100: '#B2E9DE',
    200: '#7DDCC9',
    300: '#3DCDB3',
    400: '#00C0A1',
    500: '#00B391',
    600: '#00A483',
    700: '#009372',
    800: '#008364',
    900: '#006547',
  },

  orange: {
    50: '#FBEDE7',
    100: '#FFD0BC',
    200: '#FFB291',
    300: '#FF9365',
    400: '#FF7B43',
    500: '#FF6422',
    600: '#F45E1E',
    700: '#E65719',
    800: '#D85015',
    900: '#BF420C',
  },

  pink: {
    50: '#fbe5ee',
    100: '#f6bed6',
    200: '#f194ba',
    300: '#ed6a9f',
    400: '#ea4c89',
    500: '#e83274',
    600: '#d72f70',
    700: '#c02c69',
    800: '#aa2964',
    900: '#852259',
  },

  purple: {
    50: '#f2e7fc',
    100: '#ddd0f3',
    200: '#c79bf2',
    300: '#b16fed',
    400: '#9e4ae8',
    500: '#8c18e2',
    600: '#8110dc',
    700: '#7300d3',
    800: '#6500ce',
    900: '#4e00c6',
  },

  red: {
    50: '#f5e9e8',
    100: '#f4cfcd',
    200: '#eca9a5',
    300: '#e3837d',
    400: '#da5d55',
    500: '#d44037',
    600: '#b4362f',
    700: '#942d27',
    800: '#75231e',
    900: '#551a16',
  },

  yellow: {
    50: '#fefae7',
    100: '#fbf1c4',
    200: '#f8e99f',
    300: '#f4e07b',
    400: '#f0d961',
    500: '#ecd348',
    600: '#dcc243',
    700: '#c8ac3d',
    800: '#b39638',
    900: '#90722f',
  },
};

export const primary: Record<Color & Gradient, CSS.Property.Color> = {
  50: '#ECF4FE',
  100: '#C9E1FB',
  200: '#95C5F8',
  300: '#62A9F4',
  400: '#308DF1',
  500: '#0072EC',
  600: '#005CBE',
  700: '#00458E',
  800: '#003772',
  900: '#002956',
  'gradient.0': `linear-gradient(90deg, #0072EC 0%, #4E00C6 163.65%, #8C18E2 191.59%)`,
  'gradient.20': `linear-gradient(0deg, rgba(10, 21, 33, 0.2), rgba(10, 21, 33, 0.2)), linear-gradient(90deg, #0072EC 0%, #8C18E2 191.59%)`,
  'gradient.40': `linear-gradient(0deg, rgba(10, 21, 33, 0.4), rgba(10, 21, 33, 0.4)), linear-gradient(90deg, #0072EC 0%, #8C18E2 191.59%)`,
  'gradient.60': `linear-gradient(0deg, rgba(10, 21, 33, 0.6), rgba(10, 21, 33, 0.6)), linear-gradient(90deg, #0072EC 0%, #8C18E2 191.59%)`,
};

export const neutral: Record<Color, CSS.Property.Color> = {
  50: '#FAFAFB',
  100: '#F4F4F5',
  200: '#D5D7D9',
  300: '#B8BBBF',
  400: '#9DA1A6',
  500: '#80858C',
  600: '#646B72',
  700: '#49515A',
  800: '#2A343F',
  900: '#0A1521',
};

export const status: Record<Status, Record<Color, CSS.Property.Color>> = {
  danger: {
    50: '#fbe5ea',
    100: '#f6becb',
    200: '#f095a9',
    300: '#ea6d88',
    400: '#e35470',
    500: '#dd425a',
    600: '#cd3d57',
    700: '#b73853',
    800: '#a3324f',
    900: '#7d2a47',
  },

  success: {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  },

  warning: {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#ffc107',
    600: '#ffb300',
    700: '#ffa000',
    800: '#ff8f00',
    900: '#ed6700',
  },
};

export const white: CSS.Property.Color = '#FFFFFF';
