import merge from 'deepmerge';

import base from '../base';
import components from './components';
import foundations from './foundations';
import styles from './styles';

const overrides = {
  ...foundations,
  components,
  styles,
};

export default merge(base, overrides);
