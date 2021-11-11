import { createStitches, defaultThemeMap } from '@stitches/react';
import type { PropertyValue } from '@stitches/react';
import { theme as defaultTheme } from '@manifest-ui/themes';

export * from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  prefix: 'manifest',
  theme: defaultTheme,
  media: {
    bp1: '(min-width: 600px)',
    bp2: '(min-width: 960px)',
    bp3: '(min-width: 1280px)',
    bp4: '(min-width: 1920px)',
    motion: '(prefers-reduced-motion)',
    hover: '(hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    bg: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
  },
  themeMap: {
    ...defaultThemeMap,
    border: 'borders',

    opacity: 'opacities',

    blockSize: 'space',
    minBlockSize: 'space',
    maxBlockSize: 'space',
    inlineSize: 'space',
    minInlineSize: 'space',
    maxInlineSize: 'space',
    width: 'space',
    minWidth: 'space',
    maxWidth: 'space',
    height: 'space',
    minHeight: 'space',
    maxHeight: 'space',
    flexBasis: 'space',
    gridTemplateColumns: 'space',
    gridTemplateRows: 'space',

    transitionProperty: 'transitionProperties',
    transitionDuration: 'transitionDurations',
    transitionDelay: 'transitionDurations',
    transitionTimingFunction: 'transitionTimingFunction',
  },
});

export const darkTheme = createTheme({
  colors: {
    hiContrast: '$neutral900',
    loContrast: '$neutral800',
    shadow1: '#000000',
    shadow2: 'rgba(0, 0, 0, 0.9)',
  },
});
