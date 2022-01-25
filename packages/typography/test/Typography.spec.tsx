import * as React from 'react';
import { render, screen } from '../../../test/utils';
import { Typography } from '../src';

describe('@manifest-ui/Typography', () => {
  it('should render', () => {
    render(<Typography>Hello world</Typography>);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it.each([
    ['heading1', 'xx-large'],
    ['heading2', 'xx-large'],
    ['heading1', 'x-large'],
    ['heading2', 'x-large'],
    ['heading1', 'large'],
    ['heading2', 'large'],
    ['heading1', 'medium'],
    ['heading2', 'medium'],
    ['heading1', 'small'],
    ['heading2', 'small'],
  ])('should render %s variant with %s size', (variant, size) => {
    render(
      <Typography size={size} variant={variant}>
        Header
      </Typography>,
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  it.each([
    ['body1', 'medium'],
    ['body2', 'medium'],
    ['body1', 'small'],
    ['body2', 'small'],
  ])('should render %s variant with %s size', (variant, size) => {
    render(
      <Typography size={size} variant={variant}>
        Body
      </Typography>,
    );

    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it.each([
    ['button', 'medium'],
    ['button', 'small'],
  ])('should render %s variant with %s size', (variant, size) => {
    render(
      <Typography size={size} variant={variant}>
        Button
      </Typography>,
    );

    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it.each([
    ['link', 'medium'],
    ['link', 'small'],
  ])('should render %s variant with %s size', (variant, size) => {
    render(
      <Typography size={size} variant={variant}>
        Link
      </Typography>,
    );

    expect(screen.getByText('Link')).toBeInTheDocument();
  });

  it.each([
    ['caption1', 'medium'],
    ['caption2', 'medium'],
    ['caption1', 'small'],
    ['caption2', 'small'],
  ])('should render %s variant with %s size', (variant, size) => {
    render(
      <Typography size={size} variant={variant}>
        Caption
      </Typography>,
    );

    expect(screen.getByText('Caption')).toBeInTheDocument();
  });

  it.each([
    ['overline', 'large'],
    ['overline', 'medium'],
    ['overline', 'small'],
  ])('should render %s variant with %s size', (variant, size) => {
    render(
      <Typography size={size} variant={variant}>
        Overline
      </Typography>,
    );

    expect(screen.getByText('Overline')).toBeInTheDocument();
  });

  it.each([
    ['footnote1', 'medium'],
    ['footnote2', 'medium'],
    ['footnote1', 'small'],
    ['footnote2', 'small'],
  ])('should render %s variant with %s size', (variant, size) => {
    render(
      <Typography size={size} variant={variant}>
        Caption
      </Typography>,
    );

    expect(screen.getByText('Caption')).toBeInTheDocument();
  });
});
