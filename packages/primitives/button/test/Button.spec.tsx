import * as React from 'react';
import {
  render,
  screen,
  testA11y,
  triggerPress,
} from '@manifest-ui/test-utils';
import { Button } from '../src';

describe('@dolly/primitive-button', () => {
  it('should pass accessibility', async () => {
    await testA11y(<Button>Click Me</Button>);
  });

  it('should render', () => {
    render(<Button>Click Me</Button>);

    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should render disabled not support click events', () => {
    const clickSpy = jest.fn();

    render(
      <Button isDisabled onClick={clickSpy}>
        Click Me
      </Button>,
    );

    const button = screen.getByText('Click Me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('data-disabled', '');

    triggerPress(button);

    expect(clickSpy).not.toHaveBeenCalled();
  });
});
