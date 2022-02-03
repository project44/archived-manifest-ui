import * as React from 'react';
import { Body, BodyProps } from '../src';
import { render, screen } from '../../../test/utils';

describe('@manifest-ui/typography - Body', () => {
  it('should render', () => {
    render(<Body>Hello world</Body>);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('should render bold', () => {
    render(<Body isBold>Hello world</Body>);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it.each(['body1', 'body2'])('should render %s variant', variant => {
    render(<Body variant={variant as BodyProps['variant']}>Body</Body>);

    expect(screen.getByText('Body')).toBeInTheDocument();
  });
});
