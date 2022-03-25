import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { Content as RadixPopoverContent } from '@radix-ui/react-popover';
import { StyledPopoverContent } from './Popover.styles';
import { usePopoverContext } from './context';

export type PopoverContentProps = ComponentProps<typeof StyledPopoverContent>;

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  (props: PopoverContentProps, ref) => {
    const { align, offset, placement, onOutsideClick, onEscapeKeyDown } = usePopoverContext();

    return (
      <RadixPopoverContent
        asChild
        align={align}
        alignOffset={offset?.[0]}
        side={placement}
        sideOffset={offset?.[1]}
        onInteractOutside={onOutsideClick}
        onEscapeKeyDown={onEscapeKeyDown}
      >
        <StyledPopoverContent className="manifestui-popover" ref={ref} {...props} />
      </RadixPopoverContent>
    );
  },
);

PopoverContent.displayName = 'PopoverContent';
