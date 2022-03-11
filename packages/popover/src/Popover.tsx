import * as React from 'react';
import { Popper, PopperProps } from '@manifest-ui/popper';
import { useControlled, useId } from '@manifest-ui/hooks';
import { PopoverContext } from './context';
import { VirtualElement } from '@popperjs/core';

export interface PopoverProps extends PopperProps {
  /**
   * Whether the popover is open by default.
   */
  defaultOpen?: boolean;
  /**
   * Whether the popover is open.
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * Callback executed on popover state change.
   */
  onChange?(isOpen: boolean): void;
  /**
   * Callback fired when a click is registered outside the popover.
   */
  onClickOutside?(event: TouchEvent | MouseEvent): void;
  /**
   * Callback fired when the escape key is pressed.
   */
  onEscapeKeyDown?(event: KeyboardEvent): void;
}

export function Popover(props: PopoverProps) {
  const {
    children,
    defaultOpen: defaultValue,
    disablePortal,
    gutter,
    isOpen: value,
    modifiers,
    onChange,
    onClickOutside,
    onEscapeKeyDown,
    placement,
  } = props;

  const anchorRef = React.useRef<Element | VirtualElement | null>(null);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const popoverRef = React.useRef<HTMLDivElement | null>(null);

  const id = useId();

  const [hasAnchor, setHasAnchor] = React.useState(false);
  const [isOpen = false, setIsOpen] = useControlled({ defaultValue, onChange, value });

  return (
    <Popper
      disablePortal={disablePortal}
      gutter={gutter}
      isOpen={isOpen}
      modifiers={modifiers}
      placement={placement}
    >
      <PopoverContext.Provider
        value={{
          anchorRef,
          hasAnchor,
          id,
          isOpen,
          popoverRef,
          onClickOutside,
          onEscapeKeyDown,
          setHasAnchor,
          setIsOpen,
          triggerRef,
        }}
      >
        {children}
      </PopoverContext.Provider>
    </Popper>
  );
}

Popover.displayName = 'Popover';
