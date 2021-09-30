import type { ThemeConfig, ThemeDirection } from '@chakra-ui/theme';

import components from './components';
import foundations from './foundations';
import styles from './styles';

const direction: ThemeDirection = 'ltr';

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
};

export const theme = {
  direction,
  ...foundations,
  components,
  styles,
  config,
};

export type Theme = typeof theme;

export default theme;
