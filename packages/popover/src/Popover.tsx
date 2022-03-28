import * as React from 'react';
import { PopoverContext, PopoverContextOptions } from './context';
import { Popover as RadixPopover } from '@radix-ui/react-popover';

export interface PopoverProps extends PopoverContextOptions {
  /**
   * Content to be render by the popover.
   */
  children?: React.ReactNode;
  /**
   * Whether the popover is open.
   */
  isOpen?: boolean;
  /**
   * Callback fired when the popover state changes.
   */
  onChange?(isOpen: boolean): void;
}

export function Popover(props: PopoverProps) {
  const {
    align = 'center',
    children,
    isOpen,
    offset = [0, 8],
    placement = 'bottom',
    onChange,
    onEscapeKeyDown,
    onOutsideClick,
  } = props;

  return (
    <RadixPopover open={isOpen} onOpenChange={onChange}>
      <PopoverContext.Provider
        value={{
          align,
          offset,
          onEscapeKeyDown,
          onOutsideClick,
          placement,
        }}
      >
        {children}
      </PopoverContext.Provider>
    </RadixPopover>
  );
}

Popover.displayName = 'Popover';
