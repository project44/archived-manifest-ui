import * as React from 'react';
import { Button, ButtonProps } from '../src';
import { render, screen, testA11y, triggerPress } from '../../../test/utils';

describe('@manifest-ui/button', () => {
  it('should pass accessibility', async () => {
    await testA11y(<Button>Click Me</Button>);
  });

  it('should pass accessibility when disabled', async () => {
    await testA11y(<Button isDisabled>Click Me</Button>);
  });

  it('should pass accessibility when render as an anchor tag', async () => {
    await testA11y(<Button as="a">Click Me</Button>);
  });

  it('should handle button tags', () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('type', 'button');
  });

  it('should handle disabled button tags', () => {
    const clickSpy = jest.fn();

    render(
      <Button isDisabled onClick={clickSpy}>
        Click Me
      </Button>,
    );

    const button = screen.getByText('Click Me').parentElement;

    triggerPress(button);

    expect(button).toHaveAttribute('tabIndex', '-1');
    expect(clickSpy).not.toHaveBeenCalled();
  });

  it('should handle anchor tags', () => {
    render(
      <Button as="a" href="http://www.google.com" target="_blank">
        Click Me
      </Button>,
    );

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('href', 'http://www.google.com');
    expect(button).toHaveAttribute('tabIndex', '0');
    expect(button).toHaveAttribute('target', '_blank');
  });

  it('should handle disabled anchor tags', () => {
    render(
      <Button as="a" isDisabled>
        Click Me
      </Button>,
    );

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-disabled');
    expect(button).not.toHaveAttribute('tabIndex');
  });

  it.each(['brand', 'danger'])('should render %s colorTheme', colorTheme => {
    render(<Button colorTheme={colorTheme as ButtonProps['colorTheme']}>Click Me</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it.each(['medium', 'large'])('should render %s size', size => {
    render(<Button size={size as ButtonProps['size']}>Click Me</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it.each(['filled', 'outlined', 'text'])('should render %s variant', variant => {
    render(<Button variant={variant as ButtonProps['variant']}>Click Me</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
