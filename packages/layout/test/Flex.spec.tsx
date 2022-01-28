import * as React from 'react';
import { render, screen } from '../../../test/utils';
import { Flex } from '../src';

describe('@manifest-ui/layout - Flex', () => {
  it('should render', () => {
    render(
      <Flex data-testid="flex-root">
        <div>Child</div>
        <div>Child</div>
      </Flex>,
    );

    expect(screen.getByTestId('flex-root')).toHaveStyle('display: flex');
  });
});
