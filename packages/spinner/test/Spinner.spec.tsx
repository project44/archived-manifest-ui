import * as React from 'react';
import { Spinner } from '../src';
import { testA11y } from '../../../test/utils';

describe('@manifest-io/spinner', () => {
  it('should pass accessibility', async () => {
    await testA11y(<Spinner />);
  });

  it('should pass accessibility with a label', async () => {
    await testA11y(<Spinner label="Hidden Label" />);
  });
});
