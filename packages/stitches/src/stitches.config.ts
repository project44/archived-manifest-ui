import { createStitches, CSSProperties } from '@stitches/react';
export * from '@stitches/react';

import { theme as defaultTheme } from '@manifest-ui/themes';

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
  theme: defaultTheme,
  utils: {
    p: (value: CSSProperties['padding']) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: CSSProperties['padding']) => ({
      paddingTop: value,
    }),
    pr: (value: CSSProperties['padding']) => ({
      paddingRight: value,
    }),
    pb: (value: CSSProperties['padding']) => ({
      paddingBottom: value,
    }),
    pl: (value: CSSProperties['padding']) => ({
      paddingLeft: value,
    }),
    px: (value: CSSProperties['padding']) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: CSSProperties['padding']) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: CSSProperties['margin']) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: CSSProperties['margin']) => ({
      marginTop: value,
    }),
    mr: (value: CSSProperties['margin']) => ({
      marginRight: value,
    }),
    mb: (value: CSSProperties['margin']) => ({
      marginBottom: value,
    }),
    ml: (value: CSSProperties['margin']) => ({
      marginLeft: value,
    }),
    mx: (value: CSSProperties['margin']) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: CSSProperties['margin']) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});
