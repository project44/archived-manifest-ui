import * as React from 'react';
import { PopoverTrigger, PopoverTriggerProps } from '@manifest-ui/popover';

export type DropdownTriggerProps = PopoverTriggerProps;

export const DropdownTrigger = React.forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  (props: DropdownTriggerProps, ref) => (
    <PopoverTrigger aria-haspopup="menu" ref={ref} {...props} />
  ),
);

DropdownTrigger.displayName = 'DropdownTrigger';
