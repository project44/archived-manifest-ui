import * as React from 'react';
import { Popper, PopperAnchor, PopperContent } from '../src';
import { render, screen, testA11y, waitFor, within } from '../../../test/utils';

describe('@manifest-ui/popper', () => {
  it('should pass accessibility', async () => {
    await testA11y(
      <Popper>
        <PopperAnchor>
          <button>click me</button>
        </PopperAnchor>
        <PopperContent>hello world</PopperContent>
      </Popper>,
    );
  });

  it('should render', async () => {
    const { rerender } = render(
      <Popper>
        <PopperAnchor>
          <button>click me</button>
        </PopperAnchor>
        <PopperContent>hello world</PopperContent>
      </Popper>,
    );

    await waitFor(() => {
      expect(screen.getByText('hello world')).toBeInTheDocument();
      expect(screen.getByRole('tooltip')).toHaveAttribute('data-popper-placement', 'bottom');
    });

    rerender(
      <Popper placement="top-start">
        <PopperAnchor>
          <button>click me</button>
        </PopperAnchor>
        <PopperContent>hello world</PopperContent>
      </Popper>,
    );

    // Should render with a top-start placement
    await waitFor(() => {
      expect(screen.getByText('hello world')).toBeInTheDocument();
      expect(screen.getByRole('tooltip')).toHaveAttribute('data-popper-placement', 'top-start');
    });
  });

  it('should not render if isOpen is false', () => {
    render(
      <Popper isOpen={false}>
        <PopperAnchor>
          <button>click me</button>
        </PopperAnchor>
        <PopperContent>hello world</PopperContent>
      </Popper>,
    );

    expect(screen.queryByText('hello world')).not.toBeInTheDocument();
  });

  it('should not render within a portal', async () => {
    const { rerender } = render(
      <div data-testid="container">
        <Popper>
          <PopperAnchor>
            <button>click me</button>
          </PopperAnchor>
          <PopperContent>hello world</PopperContent>
        </Popper>
      </div>,
    );

    await waitFor(() => {
      expect(screen.getByText('hello world')).toBeInTheDocument();
      expect(screen.getByTestId('container')).not.toContain(screen.getByText('hello world'));
    });

    rerender(
      <div data-testid="container">
        <Popper disablePortal>
          <PopperAnchor>
            <button>click me</button>
          </PopperAnchor>
          <PopperContent>hello world</PopperContent>
        </Popper>
      </div>,
    );

    await waitFor(() => {
      expect(screen.getByText('hello world')).toBeInTheDocument();
      expect(within(screen.getByTestId('container')).getByText('hello world')).toBeVisible();
    });
  });
});
