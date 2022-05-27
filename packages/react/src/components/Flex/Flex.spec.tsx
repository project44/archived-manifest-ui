import * as React from 'react';
import { Flex } from './Flex';
import { render } from '@testing-library/react';

describe('@manifest-ui/react - Flex', () => {
  it('should render', () => {
    const { container } = render(<Flex>Flex</Flex>);

    expect(container).toHaveTextContent('Flex');
  });
});
