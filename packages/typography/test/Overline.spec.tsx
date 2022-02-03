import * as React from 'react';
import { Overline, OverlineProps } from '../src';
import { render, screen } from '../../../test/utils';

describe('@manifest-ui/typography - Overline', () => {
  it('should render', () => {
    render(<Overline>Hello world</Overline>);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it.each(['overline1', 'overline2'])('should render %s variant', variant => {
    render(<Overline variant={variant as OverlineProps['variant']}>Overline</Overline>);

    expect(screen.getByText('Overline')).toBeInTheDocument();
  });
});
