import * as React from 'react';
import { fireEvent, render, screen, testA11y } from '../../../test/utils';
import { Portal } from '../src';

describe('@manifest-ui/portal', () => {
  it('should render children', () => {
    render(
      <Portal>
        <span data-testid="child" />
      </Portal>,
    );

    expect(screen.getByTestId('child')).toBeVisible();
  });

  it('should render children in a container', () => {
    const container = document.createElement('div');

    document.body.appendChild(container);

    function Component() {
      const ref = React.useRef(null);

      if (ref.current === null) {
        ref.current = container;
      }

      return (
        <Portal containerRef={ref}>
          <span data-testid="child" />
        </Portal>
      );
    }

    render(<Component />);

    expect(container).toContainElement(screen.getByTestId('child'));

    document.body.removeChild(container);
  });
});
