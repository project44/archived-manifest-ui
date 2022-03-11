import * as React from 'react';
import { Options, Placement, VirtualElement } from '@popperjs/core';
import { PoppperContext } from './context';

export interface PopperProps {
  /**
   * Content rendered within the popper.
   */
  children: React.ReactNode;
  /**
   * Whether to disable the portal behavior.
   *
   * @default false
   */
  disablePortal?: boolean;
  /**
   * The distance between the popper and the anchor element
   *
   * @default 8
   */
  gutter?: number;
  /**
   * Whether the popper is isOpen.
   *
   * @default true
   */
  isOpen?: boolean;
  /**
   * Modifiers passed to the popperjs instance.
   */
  modifiers?: Options['modifiers'];
  /**
   * The placement of the popper element in relation to its anchor element.
   *
   * @default 'bottom'
   */
  placement?: Placement;
}

export function Popper(props: PopperProps) {
  const {
    children,
    disablePortal = false,
    gutter = 8,
    isOpen = true,
    modifiers = [],
    placement = 'bottom',
  } = props;

  // Using state instead of refs to ensure popper state updates correctly.
  const [anchorElement, setAnchorElement] = React.useState<HTMLElement | VirtualElement | null>(
    null,
  );
  const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(null);

  return (
    <PoppperContext.Provider
      value={{
        anchorElement,
        disablePortal,
        gutter,
        isOpen,
        modifiers,
        placement,
        popperElement,
        setAnchorElement,
        setPopperElement,
      }}
    >
      {children}
    </PoppperContext.Provider>
  );
}
