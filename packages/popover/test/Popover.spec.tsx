import * as React from 'react';
import { fireEvent, render, screen, testA11y, waitFor, within } from '../../../test/utils';
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '../src';

describe('@manifest-ui/popover', () => {
  it('should pass accessibility', async () => {
    await testA11y(
      <Popover isOpen>
        <PopoverTrigger>
          <button>click me</button>
        </PopoverTrigger>
        <PopoverContent>hello world</PopoverContent>
      </Popover>,
    );
  });

  it('should render', async () => {
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

    fireEvent.click(trigger);

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    // Escape close the popover
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    fireEvent.click(trigger);

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    // Outside click closed the popover
    fireEvent.click(document.body);

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('should not call events if not open', () => {
    const clickOutsideSpy = jest.fn();
    const escapeKeySpy = jest.fn();

    render(
      <Popover onClickOutside={clickOutsideSpy} onEscapeKeyDown={escapeKeySpy}>
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
});
