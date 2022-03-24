import * as React from 'react';
import { DropdownContext, DropdownContextOptions } from './context';
import { Popover, PopoverProps } from '@manifest-ui/popover';

export interface DropdownProps extends PopoverProps, DropdownContextOptions {}

export function Dropdown(props: DropdownProps) {
  const { autoFocus, disableFocusTrap = false, restoreFocus, ...other } = props;

  return (
    <DropdownContext.Provider value={{ autoFocus, disableFocusTrap, restoreFocus }}>
      <Popover {...other} />
    </DropdownContext.Provider>
  );
}
