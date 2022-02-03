import * as React from 'react';
import { Footnote, FootnoteProps } from '../src';
import { render, screen } from '../../../test/utils';

describe('@manifest-ui/typography - Footnote', () => {
  it('should render', () => {
    render(<Footnote>Hello world</Footnote>);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('should render bold', () => {
    render(<Footnote isBold>Hello world</Footnote>);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it.each(['footnote1', 'footnote2'])('should render %s variant', variant => {
    render(<Footnote variant={variant as FootnoteProps['variant']}>Footnote</Footnote>);

    expect(screen.getByText('Footnote')).toBeInTheDocument();
  });
});
