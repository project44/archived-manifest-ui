import * as React from 'react';
import { DropdownMenuTriggerProps, Trigger } from '@radix-ui/react-dropdown-menu';

export const DropdownTrigger = React.forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  (props: DropdownMenuTriggerProps, ref) => <Trigger {...props} ref={ref} asChild />,
);

DropdownTrigger.displayName = 'DropdownTrigger';
