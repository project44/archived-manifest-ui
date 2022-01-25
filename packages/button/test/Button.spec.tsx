import * as React from 'react';
import { render, screen, testA11y, triggerPress } from '../../../test/utils';
import { Button } from '../src';

describe('@manifest-ui/button', () => {
  it('should pass accessibility', async () => {
    await testA11y(<Button>Click Me</Button>);
  });

  it('should pass accessibility when disabled', async () => {
    await testA11y(<Button isDisbaled>Click Me</Button>);
  });

  it('should pass accessibility when render as an anchor tag', async () => {
    await testA11y(<Button as="a">Click Me</Button>);
  });

  it('should render', () => {
    render(<Button>Click Me</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should handle button tags', () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByText('Click Me').parentElement;

    expect(button).toHaveAttribute('type', 'button');
  });

  it('should handle anchor tags', () => {
    render(<Button as="a">Click Me</Button>);

    const button = screen.getByText('Click Me').parentElement;

    expect(button).toHaveAttribute('role', 'button');
    expect(button).toHaveAttribute('tabIndex', '0');
  });
});
