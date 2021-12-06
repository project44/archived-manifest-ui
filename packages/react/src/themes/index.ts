export const borderWidths = {
  1: '1px',
  2: '2px',
  3: '4px',
};

export const colors = {
  gray1: '#f3f3f5',
  gray2: '#e4e5ea',
  gray3: '#ced0d8',
  gray4: '#a5aab7',
  gray5: '#697187',
  gray6: '#434d69',
  gray7: '#303a52',
  gray8: '#1f2535',
  gray9: '#141822',
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
  hiContrast: '$gray9',
  loContrast: 'white',
  link: '$blue7',
  linkVisited: '$purple7',
  text1: '$gray9',
  text2: '$gray7',
  surface1: 'white',
  surface2: '$gray2',
  surface3: '$gray3',
  surface4: '$gray4',
};

export const fonts = {
  sans: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
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
  4: 400,
  5: 500,
  6: 600,
  7: 700,
};

export const letterSpacings = {
  1: '-0.05em',
  2: '-0.025em',
  3: '0.025em',
  4: '0.05em',
};

export const lineHeights = {
  1: 1.25,
  2: 1.375,
  3: 1.5,
};

export const radii = {
  1: '0.25rem',
  2: '0.5rem',
  3: '2rem',
  4: '4rem',
  round: '1e5px',
};

export const shadows = {
  color: '220 3% 15%',
  strength: '1%',
  1: `0 1px 2px -1px hsl($color / calc($strength + 9%))`,
  2: `
    0 3px 5px -2px hsl($color / calc($strength + 3%)),
    0 7px 14px -5px hsl($color / calc($strength + 5%))`,
  3: `
    0 -1px 3px 0 hsl($color / calc($strength + 2%)),
    0 1px 2px -5px hsl($color / calc($strength + 2%)),
    0 2px 5px -5px hsl($color / calc($strength + 4%)),
    0 4px 12px -5px hsl($color / calc($strength + 5%)),
    0 12px 15px -5px hsl($color / calc($strength + 7%))`,
  4: `
    0 -2px 5px 0 hsl($color / calc($strength + 2%)),
    0 1px 1px -2px hsl($color / calc($strength + 3%)),
    0 2px 2px -2px hsl($color / calc($strength + 3%)),
    0 5px 5px -2px hsl($color / calc($strength + 4%)),
    0 9px 9px -2px hsl($color / calc($strength + 5%)),
    0 16px 16px -2px hsl($color / calc($strength + 6%))`,
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

export const sizes = {
  content1: '20ch',
  content2: '45ch',
  content3: '60ch',
  header1: '20ch',
  header2: '25ch',
  header3: '45rem',
};

const transitionProperties = {
  common:
    'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
  colors: 'background-color, border-color, color, fill, stroke',
};

const transitionDurations = {
  1: '125ms',
  2: '200ms',
  3: '300ms',
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
  1: '100',
  2: '200',
  3: '300',
  4: '400',
  max: '2147483647',
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
  sizes,
  transitions,
  transitionProperties,
  transitionDurations,
  transitionTimingFunctions,
  zIndices,
};

export const darkTheme = {
  colors: {
    hiContrast: '$gray1',
    loContrast: '$gray9',
    link: '$blue3',
    linkVisited: '$purple3',
    text1: '$gray1',
    text2: '$gray2',
    surface1: '$gray9',
    surface2: '$gray8',
    surface3: '$gray7',
    surface4: '$gray6',
  },
  shadows: {
    color: '220 40% 2%',
    strength: '25%',
  },
};

export default lightTheme;
