import * as React from 'react';
import { Options, VirtualElement } from '@popperjs/core';
import { PoppperContext } from './context';
import { StrictModifier } from 'react-popper';

export interface PopperProps {
  /**
   * The alignment of the popper.
   *
   * @default 'center'
   */
  align?: 'center' | 'end' | 'start';
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
  modifiers?: StrictModifier[];
  /**
   * The placement of the popper element in relation to its anchor element.
   *
   * @default 'bottom'
   */
  placement?: 'bottom' | 'left' | 'right' | 'top';
}

export function Popper(props: PopperProps) {
  const {
    align = 'center',
    children,
    disablePortal = false,
    gutter = 8,
    isOpen = true,
    modifiers = [],
    placement = 'bottom',
  } = props;

  // Using state instead of refs to ensure popper state updates correctly.
  const [anchorElement, setAnchorElement] = React.useState<Element | VirtualElement | null>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(null);

  const config = React.useMemo(
    (): Partial<Options> => ({
      placement: align === 'center' ? placement : `${placement}-${align}`,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, gutter],
          },
        },
        ...modifiers,
      ],
    }),
    [align, gutter, placement, modifiers],
  );

  return (
    <PoppperContext.Provider
      value={{
        anchorElement,
        disablePortal,
        config,
        isOpen,
        popperElement,
        setAnchorElement,
        setPopperElement,
      }}
    >
      {children}
    </PoppperContext.Provider>
  );
}
