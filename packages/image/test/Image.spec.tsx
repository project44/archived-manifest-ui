import * as React from 'react';
import { Image } from '../src';
import { testA11y } from '../../../test/utils';

describe('@manifest-ui/image', () => {
  it('should pass accessibility', async () => {
    await testA11y(
      <Image
        alt="hello world"
        src="http://localhost/some_image.png"
        srcSet="http://localhost/some_image.png"
      />,
    );
  });
});
