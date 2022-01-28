import * as React from 'react';
import { IconButton, IconButtonProps } from '../src';
import { render, screen } from '../../../test/utils';

describe('@manifest-ui/button - IconButton', () => {
  it('should render', () => {
    render(<IconButton />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it.each(['brand', 'danger'])('should render %s colorTheme', colorTheme => {
    render(<IconButton colorTheme={colorTheme as IconButtonProps['colorTheme']} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it.each(['medium', 'large'])('should render %s size', size => {
    render(<IconButton size={size as IconButtonProps['size']} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it.each(['filled', 'outlined', 'text', 'tonal'])('should render %s variant', variant => {
    render(<IconButton variant={variant as IconButtonProps['variant']} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
