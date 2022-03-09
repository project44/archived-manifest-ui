import * as React from 'react';
import { useClickOutside, useEscapeKey } from '@manifest-ui/hooks';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledPopoverContent } from './Popover.styles';
import { useMergedRef } from '@manifest-ui/hooks';
import { usePopoverContext } from './context';

export type PopoverContentProps = ComponentProps<typeof StyledPopoverContent>;

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  (props: PopoverContentProps, ref) => {
    const {
      anchorRef,
      id,
      isOpen,
      onClickOutside,
      onEscapeKeyDown,
      popoverRef,
      setIsOpen,
      triggerRef,
    } = usePopoverContext();

    useClickOutside(
      (event: MouseEvent | TouchEvent) => {
        onClickOutside?.(event);

        setIsOpen?.(false);
      },
      [popoverRef, anchorRef, triggerRef],
    );

    useEscapeKey((event: KeyboardEvent) => {
      if (!isOpen) return;

      onEscapeKeyDown?.(event);

      setIsOpen?.(false);
    });

    return (
      <StyledPopoverContent
        id={id}
        ref={useMergedRef(popoverRef, ref)}
        role="dialog"
        tabIndex={-1}
        {...props}
      />
    );
  },
);

PopoverContent.displayName = 'PopoverContent';
