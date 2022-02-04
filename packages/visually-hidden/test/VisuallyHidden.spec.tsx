import * as React from 'react';
import { testA11y } from '../../../test/utils';
import { VisuallyHidden } from '../src';

describe('@manifest-ui/visually-hidden', () => {
  it('should pass accessibility', async () => {
    await testA11y(
      <VisuallyHidden>
        <button>Click Me</button>
      </VisuallyHidden>,
    );
  });
});
