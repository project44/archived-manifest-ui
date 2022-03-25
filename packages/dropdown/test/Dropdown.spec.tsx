import * as React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownProps, DropdownTrigger } from '../src';
import { render, screen, testA11y, triggerPress, userEvent, waitFor } from '../../../test/utils';
import { act } from 'react-dom/test-utils';

function ControlledDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dropdown isOpen={isOpen} onChange={setIsOpen}>
      <DropdownTrigger>
        <button>Open</button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

describe('@manifest-ui/dropdown', () => {
  it('should pass accessibility', async () => {
    await act(() =>
      testA11y(
        <Dropdown isOpen>
          <DropdownTrigger>
            <button>Open</button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem>Option 3</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      ),
    );
  });

  it('should render', async () => {
    const handleSelect = jest.fn();

    render(
      <Dropdown>
        <DropdownTrigger>
          <button>Open Dropdown</button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={handleSelect}>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem>Option 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    expect(screen.queryByRole('menu')).toBeNull();

    act(() => {
      userEvent.type(screen.getByRole('button'), '{arrowdown}');
    });

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeDefined();
    });

    triggerPress(screen.getByText('Option 1'));

    expect(handleSelect).toHaveBeenCalled();
  });

  it('should support controlled state', () => {
    render(<ControlledDropdown />);

    expect(screen.queryByRole('menu')).toBeNull();

    act(() => {
      userEvent.type(screen.getByRole('button'), '{arrowdown}');
    });

    expect(screen.getByRole('menu')).toBeDefined();
  });

  it.each(['center', 'end', 'start'])('should align %s', async alignment => {
    render(
      <Dropdown align={alignment as DropdownProps['align']}>
        <DropdownTrigger>
          <button>Open Dropdown</button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem>Option 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    act(() => {
      userEvent.type(screen.getByRole('button'), '{arrowdown}');
    });

    await waitFor(() => expect(screen.getByRole('menu')).toHaveAttribute('data-align', alignment));
  });

  it.each(['bottom', 'left', 'right', 'top'])('should place %s', async placement => {
    render(
      <Dropdown placement={placement as DropdownProps['placement']}>
        <DropdownTrigger>
          <button>Open Dropdown</button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem>Option 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    act(() => {
      userEvent.type(screen.getByRole('button'), '{arrowdown}');
    });

    await waitFor(() => expect(screen.getByRole('menu')).toHaveAttribute('data-side', placement));
  });
});
