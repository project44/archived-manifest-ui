import * as React from 'react';
import { render, screen, testA11y } from '../../../test/utils';
import { Separator } from '../src';

describe('@manifest-ui/separator', () => {
  it('should pass accessibility', async () => {
    await testA11y(<Separator />);
  });

  it('should render', () => {
    render(<Separator />);

    const separator = screen.getByRole('separator');

    expect(separator).toBeVisible();
    expect(separator).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('should render vertical separator', () => {
    render(<Separator orientation="vertical" />);

    const separator = screen.getByRole('separator');

    expect(separator).toBeVisible();
    expect(separator).toHaveAttribute('aria-orientation', 'vertical');
  });
});
