import * as React from 'react';
import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { useFocusTrap, UseFocusTrapOptions } from '../src';

const Component: React.FC<UseFocusTrapOptions> = ({ children, ...other }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useFocusTrap(ref, other);

  return (
    <div data-testId="container" ref={ref}>
      <button>First</button>
      <button>Second</button>
      <button>Third</button>
      {children}
    </div>
  );
};

describe('@manifest-ui/hooks - useFocusTrap', () => {
  it('should be defined', () => {
    expect(useFocusTrap).toBeDefined();
  });

  it('should focus first element', async () => {
    const { rerender } = render(<Component />);

    // Should not focus is trap is not active.
    await waitFor(() => {
      expect(screen.getByText('First')).not.toHaveFocus();
    });

    // eslint-disable-next-line jsx-a11y/no-autofocus
    rerender(<Component autoFocus={false} isActive />);

    // Should not focus first element if autoFocus is disabled.
    await waitFor(() => {
      expect(screen.getByText('First')).not.toHaveFocus();
    });

    rerender(<Component isActive />);

    await waitFor(() => {
      expect(screen.getByText('First')).toHaveFocus();
    });
  });

  it('should trap focus', async () => {
    render(<Component isActive />);

    await waitFor(() => {
      expect(screen.getByText('First')).toHaveFocus();
    });

    userEvent.tab();

    await waitFor(() => {
      expect(screen.getByText('Second')).toHaveFocus();
    });

    userEvent.tab();

    await waitFor(() => {
      expect(screen.getByText('Third')).toHaveFocus();
    });

    userEvent.tab();

    await waitFor(() => {
      expect(screen.getByText('First')).toHaveFocus();
    });
  });

  it('should restore focus', async () => {
    const Wrapper = () => {
      const [isActive, setIsActive] = React.useState(false);

      return (
        <>
          <button onClick={() => setIsActive(true)}>Activate</button>
          <Component isActive={isActive}>
            <button onClick={() => setIsActive(false)}>Deactivate</button>
          </Component>
        </>
      );
    };

    render(<Wrapper />);

    const button = screen.getByText('Activate');

    button.focus();

    expect(screen.getByText('Activate')).toHaveFocus();

    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('First')).toHaveFocus();
    });

    userEvent.click(screen.getByText('Deactivate'));

    await waitFor(() => {
      expect(screen.getByText('Activate')).toHaveFocus();
    });
  });
});
