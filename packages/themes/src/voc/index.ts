import { extendTheme } from '@chakra-ui/react';

import components from './components';
import foundations from './foundations';
import styles from './styles';
import layerStyles from './textStyles';
import textStyles from './textStyles';

const overrides = {
  config: {
    cssVarPrefix: 'manifest',
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  ...foundations,
  components,
  styles,
  layerStyles,
  textStyles,
};

export default extendTheme(overrides);
