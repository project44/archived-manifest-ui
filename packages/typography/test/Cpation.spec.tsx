import * as React from 'react';
import { Caption, CaptionProps } from '../src';
import { render, screen } from '../../../test/utils';

describe('@manifest-ui/typography - Caption', () => {
  it('should render', () => {
    render(<Caption>Hello world</Caption>);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('should render bold', () => {
    render(<Caption isBold>Hello world</Caption>);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it.each(['caption1', 'caption2'])('should render %s variant', variant => {
    render(<Caption variant={variant as CaptionProps['variant']}>Caption</Caption>);

    expect(screen.getByText('Caption')).toBeInTheDocument();
  });
});
