import { createStitches, defaultThemeMap, CSS } from '@stitches/react';
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
    bp1: `(min-width: 600px)`,
    bp2: `(min-width: 960px)`,
    bp3: `(min-width: 1280px)`,
    bp4: `(min-width: 1920px)`,
    motion: '(prefers-reduced-motion)',
    hover: '(hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    bg: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
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
    // Selectors
    // https://chakra-ui.com/docs/features/style-props#pseudo
    _hover: (value: CSS) => ({
      '&:hover, &[data-hover]': value,
    }),
    _active: (value: CSS) => ({
      '&:active, &[data-active]': value,
    }),
    _focus: (value: CSS) => ({
      '&:focus, &[data-focus]': value,
    }),
    _focusVisible: (value: CSS) => ({
      '&:focus-visible': value,
    }),
    _disabled: (value: CSS) => ({
      '&[disabled], &[aria-disabled=true], &[data-disabled]': value,
    }),
    _readOnly: (value: CSS) => ({
      '&[aria-readonly=true], &[readonly], &[data-readonly]': value,
    }),
    _placeholder: (value: CSS) => ({
      '&::placeholder': value,
    }),
  },
  themeMap: {
    ...defaultThemeMap,
    opacity: 'opacities',
    transitionProperty: 'transitionProperties',
    transitionDuration: 'transitionDurations',
    transitionDelay: 'transitionDurations',
    transitionTimingFunction: 'transitionTimingFunctions',
  },
});

export const darkTheme = createTheme({
  colors: {
    hiContrast: '$neutral90',
    loContrast: '$neutral80',
    shadow1: '#000000',
    shadow2: 'rgba(0, 0, 0, 0.9)',
  },
});
