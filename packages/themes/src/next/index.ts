import { extendTheme } from '@chakra-ui/react';

import components from './components';
import foundations from './foundations';
import styles from './styles';

const overrides = {
  ...foundations,
  components,
  styles,
};

export default extendTheme(overrides);
