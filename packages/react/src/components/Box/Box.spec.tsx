import * as React from 'react';
import { Box } from './Box';
import { render } from '@testing-library/react';

describe('@manifest-ui/react - Box', () => {
  it('should render', () => {
    const { container } = render(<Box>Box</Box>);

    expect(container).toHaveTextContent('Box');
  });
});
