import { theme as designTokens } from '@manifest-ui/design-tokens';
import { utils } from './utils';

const {
  borderWidths,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  zIndices,
} = designTokens;

const media = {
  lg: `(min-width: ${breakpoints.large})`,
  md: `(min-width: ${breakpoints.medium})`,
  sm: `(min-width: ${breakpoints.small})`,
  xl: `(min-width: ${breakpoints['x-large']})`,
};

const transitions = {
  default: 'all 200ms ease',
};

const theme = {
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  transitions,
  zIndices,
};

export const defaultTheme = {
  prefix: 'manifest',
  media,
  theme,
  utils,
};
