import * as React from 'react';
import { Heading, HeadingProps } from '../src';
import { render, screen } from '../../../test/utils';

describe('@manifest-ui/typography - Heading', () => {
  it('should render', () => {
    render(<Heading>Hello world</Heading>);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('should render bold', () => {
    render(<Heading isBold>Hello world</Heading>);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])('should render %s variant', variant => {
    render(<Heading variant={variant as HeadingProps['variant']}>Header</Heading>);

    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
