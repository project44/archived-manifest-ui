import * as React from 'react';
import {
  PopoverTrigger as RadixPopoverTrigger,
  PopoverTriggerProps as RadixPopoverTriggerProps,
} from '@radix-ui/react-popover';

export type PopoverTriggerProps = RadixPopoverTriggerProps;

export const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  (props: PopoverTriggerProps, ref) => <RadixPopoverTrigger {...props} ref={ref} asChild />,
);

PopoverTrigger.displayName = 'PopoverTrigger';
