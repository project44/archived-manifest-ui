import { extendTheme } from '@chakra-ui/react';

import components from './components';
import foundations from './foundations';
import styles from './styles';
import layerStyles from './layerStyles';
import textStyles from './textStyles';

const overrides = {
  ...foundations,
  components,
  styles,
  layerStyles,
  textStyles,
};

export default extendTheme(overrides);
