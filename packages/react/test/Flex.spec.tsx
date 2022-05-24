import * as React from 'react';
import { render, screen } from '@manifest-ui/test-utils';
import { Flex } from '../src';

describe('@manifest/react - Flex', () => {
  it('should render', () => {
    render(
      <Flex data-testid="flex-root">
        <div>Child</div>
        <div>Child</div>
      </Flex>,
    );

    expect(screen.getByTestId('flex-root')).toBeInTheDocument();
  });
});
