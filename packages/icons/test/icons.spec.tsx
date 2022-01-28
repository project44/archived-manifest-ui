import * as icons from '../src';
import * as React from 'react';
import map from 'lodash.map';
import { render } from '../../../test/utils';

describe('@manifest-ui/icons', () => {
  it.each(map(icons).filter(item => typeof item !== 'boolean') as React.ElementType[])(
    'should render',
    Element => {
      render(<Element />);
    },
  );
});
