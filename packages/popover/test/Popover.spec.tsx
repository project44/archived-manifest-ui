import * as React from 'react';
import { act, fireEvent, render, screen, testA11y, waitFor } from '../../../test/utils';
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '../src';

function ControlledPopover() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover isOpen={isOpen} onChange={setIsOpen}>
      <PopoverTrigger>
        <button>Open</button>
      </PopoverTrigger>
      <PopoverContent>Content</PopoverContent>
    </Popover>
  );
}

describe('@manifest-ui/popover', () => {
  it('should pass accessibility', async () => {
    await act(() =>
      testA11y(
        <Popover isOpen>
          <PopoverTrigger>
            <button>click me</button>
          </PopoverTrigger>
          <PopoverContent>hello world</PopoverContent>
        </Popover>,
      ),
    );
  });

  it('should render', () => {
    render(
      <Popover>
        <PopoverTrigger>
          <button>click me</button>
        </PopoverTrigger>
        <PopoverContent>hello world</PopoverContent>
      </Popover>,
    );

    const trigger = screen.getByRole('button');

    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    act(() => {
      fireEvent.click(trigger);
    });

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Escape close the popover
    act(() => {
      fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });
    });

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should not call events if not open', () => {
    const clickOutsideSpy = jest.fn();
    const escapeKeySpy = jest.fn();

    render(
      <Popover onOutsideClick={clickOutsideSpy} onEscapeKeyDown={escapeKeySpy}>
        <PopoverTrigger>
          <button>click me</button>
        </PopoverTrigger>
        <PopoverContent>hello world</PopoverContent>
      </Popover>,
    );

    fireEvent.keyDown(screen.getByRole('button'), { key: 'Escape' });

    expect(escapeKeySpy).not.toHaveBeenCalled();

    fireEvent.click(document.body);

    expect(clickOutsideSpy).not.toHaveBeenCalled();
  });

  it('should render with anchor', async () => {
    render(
      <Popover>
        <PopoverAnchor>
          <input placeholder="Popover anchor" />
        </PopoverAnchor>
        <PopoverTrigger>
          <button>click me</button>
        </PopoverTrigger>
        <PopoverContent>hello world</PopoverContent>
      </Popover>,
    );

    const trigger = screen.getByRole('button');

    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(trigger);

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  it('should support controlled state', () => {
    render(<ControlledPopover />);

    expect(screen.queryByRole('dialog')).toBeNull();

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('dialog')).toBeDefined();
  });
});
