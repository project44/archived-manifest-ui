import * as React from 'react';
import { DropdownContext, DropdownContextOptions } from './context';
import { DropdownMenu as RadixDropdownMenu } from '@radix-ui/react-dropdown-menu';

export interface DropdownProps extends DropdownContextOptions {
  /**
   * Content to be render by the dialog.
   */
  children?: React.ReactNode;
  /**
   * Whether the dialog is open.
   */
  isOpen?: boolean;
  /**
   * Callback fired when the dialog state changes.
   */
  onChange?(isOpen: boolean): void;
}

export function Dropdown(props: DropdownProps) {
  const {
    align = 'center',
    children,
    isOpen,
    offset,
    placement = 'bottom',
    onChange,
    onEscapeKeyDown,
    onOutsideClick,
  } = props;

  return (
    <RadixDropdownMenu dir="ltr" open={isOpen} onOpenChange={onChange}>
      <DropdownContext.Provider
        value={{ align, offset, onEscapeKeyDown, onOutsideClick, placement }}
      >
        {children}
      </DropdownContext.Provider>
    </RadixDropdownMenu>
  );
}
