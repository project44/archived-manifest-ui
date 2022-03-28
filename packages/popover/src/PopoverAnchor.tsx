import * as React from 'react';
import {
  PopoverAnchor as RadixPopoverAnchor,
  PopperAnchorProps as RadixPopoverAnchorProps,
} from '@radix-ui/react-popover';

export type PopoverAnchorProps = RadixPopoverAnchorProps;

export const PopoverAnchor = React.forwardRef<HTMLDivElement, PopoverAnchorProps>(
  (props: PopoverAnchorProps, ref) => <RadixPopoverAnchor asChild ref={ref} {...props} />,
);

PopoverAnchor.displayName = 'PopoverAnchor';
