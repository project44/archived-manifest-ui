import * as React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '../src';
import { ExpandMore, Person } from '@manifest-ui/icons';
import { render, screen, testA11y, triggerPress } from '../../../test/utils';

function ControlledMenu() {
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
    await testA11y(
      <Dropdown isOpen>
        <DropdownTrigger>
          <button>Open</button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem isSelected startIcon={<Person />}>
            Option 1
          </DropdownItem>
          <DropdownItem endIcon={<ExpandMore />}>Option 2</DropdownItem>
          <DropdownItem>Option 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );
  });

  it('should render', () => {
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

    triggerPress(screen.getByText('Open Dropdown'));

    expect(screen.getByRole('menu')).toBeDefined();

    triggerPress(screen.getByText('Option 1'));

    expect(handleSelect).toHaveBeenCalled();
  });

  it('should support disabled items', () => {
    const handleSelect = jest.fn();

    render(
      <Dropdown>
        <DropdownTrigger>
          <button>Open Dropdown</button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem isDisabled onClick={handleSelect}>
            Option 1
          </DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem>Option 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    expect(screen.queryByRole('menu')).toBeNull();

    triggerPress(screen.getByText('Open Dropdown'));

    expect(screen.getByRole('menu')).toBeDefined();

    triggerPress(screen.getByText('Option 1'));

    expect(handleSelect).not.toHaveBeenCalled();
  });

  it('should support controlled state', () => {
    render(<ControlledMenu />);

    expect(screen.queryByRole('menu')).toBeNull();

    triggerPress(screen.getByRole('button'));

    expect(screen.getByRole('menu')).toBeDefined();
  });
});
