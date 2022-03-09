import * as React from 'react';
import { chainCallbacks } from '@manifest-ui/utils';
import { ComponentProps } from '@manifest-ui/styled';
import { PopperAnchor } from '@manifest-ui/popper';
import { Slot } from '@manifest-ui/slot';
import { useMergedRef } from '@manifest-ui/hooks';
import { usePopoverContext } from './context';

export interface PopoverTriggerProps extends Omit<ComponentProps<'button'>, 'children'> {
  children: React.ReactNode;
}

export const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  (props: PopoverTriggerProps, ref) => {
    const { onClick, ...other } = props;

    const { anchorRef, hasAnchor, id, isOpen, setIsOpen, triggerRef } = usePopoverContext();
    const mergedRef = useMergedRef(anchorRef, ref);

    const handleClick = React.useCallback(() => {
      setIsOpen?.(!isOpen);
    }, [isOpen, setIsOpen]);

    const trigger = (
      <Slot
        aria-controls={id}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        onClick={chainCallbacks(handleClick, onClick)}
        ref={useMergedRef(triggerRef, ref)}
        {...other}
      />
    );

    if (hasAnchor) {
      return trigger;
    }

    return (
      <PopperAnchor ref={mergedRef} {...other}>
        {trigger}
      </PopperAnchor>
    );
  },
);

PopoverTrigger.displayName = 'PopoverTrigger';
