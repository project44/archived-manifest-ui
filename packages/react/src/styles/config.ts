import { defaultThemeMap, PropertyValue } from '@stitches/react';
import { theme as designTokens } from '@manifest-ui/design-tokens';

const { breakpoints, ...other } = designTokens;

const media = {
  lg: `(min-width: ${breakpoints.large})`,
  md: `(min-width: ${breakpoints.medium})`,
  sm: `(min-width: ${breakpoints.small})`,
  xl: `(min-width: ${breakpoints['x-large']})`,
};

const theme = { ...other };

const utils = {
  bgColor: (value: PropertyValue<'backgroundColor'>) => ({ backgroundColor: value }),
  d: (value: PropertyValue<'display'>) => ({ display: value }),
  h: (value: PropertyValue<'height'>) => ({ height: value }),
  m: (value: PropertyValue<'margin'>) => ({ margin: value }),
  maxH: (value: PropertyValue<'maxHeight'>) => ({ maxHeight: value }),
  maxW: (value: PropertyValue<'maxWidth'>) => ({ maxWidth: value }),
  mb: (value: PropertyValue<'marginBottom'>) => ({ marginBottom: value }),
  minH: (value: PropertyValue<'minHeight'>) => ({ minHeight: value }),
  minW: (value: PropertyValue<'minWidth'>) => ({ minWidth: value }),
  ml: (value: PropertyValue<'marginLeft'>) => ({ marginLeft: value }),
  mr: (value: PropertyValue<'marginRight'>) => ({ marginRight: value }),
  mt: (value: PropertyValue<'marginTop'>) => ({ marginTop: value }),
  mx: (value: PropertyValue<'marginLeft'>) => ({ marginLeft: value, marginRight: value }),
  my: (value: PropertyValue<'marginTop'>) => ({ marginBottom: value, marginTop: value }),
  p: (value: PropertyValue<'padding'>) => ({ padding: value }),
  pb: (value: PropertyValue<'paddingBottom'>) => ({ paddingBottom: value }),
  pl: (value: PropertyValue<'paddingLeft'>) => ({ paddingLeft: value }),
  pr: (value: PropertyValue<'paddingRight'>) => ({ paddingRight: value }),
  pt: (value: PropertyValue<'paddingTop'>) => ({ paddingTop: value }),
  px: (value: PropertyValue<'paddingLeft'>) => ({ paddingLeft: value, paddingRight: value }),
  py: (value: PropertyValue<'paddingTop'>) => ({ paddingBottom: value, paddingTop: value }),
  size: (value: PropertyValue<'width'>) => ({ height: value, width: value }),
  w: (value: PropertyValue<'width'>) => ({ width: value }),
};

export default {
  media,
  prefix: 'manifest-ui',
  theme,
  themeMap: defaultThemeMap,
  utils,
};
