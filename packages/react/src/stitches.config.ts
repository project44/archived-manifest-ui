import { createStitches, defaultThemeMap } from '@stitches/react';
import type { PropertyValue } from '@stitches/react';
import * as themes from './themes';

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
  theme: themes.lightTheme,
  media: {
    bp1: '(min-width: 600px)',
    bp2: '(min-width: 960px)',
    bp3: '(min-width: 1280px)',
    bp4: '(min-width: 1920px)',
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
    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    bg: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    userSelect: (value: PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
    appearance: (value: PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
  themeMap: {
    ...defaultThemeMap,
    transitionProperty: 'transitionProperties',
    transitionDuration: 'transitionDurations',
    transitionDelay: 'transitionDurations',
    transitionTimingFunction: 'transitionTimingFunctions',
  },
});

export const darkTheme = createTheme(themes.darkTheme);
