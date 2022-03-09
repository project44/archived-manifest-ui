import * as React from 'react';
import { Options, Placement, VirtualElement } from '@popperjs/core';
import { PoppperContext } from './context';
import { StrictModifier } from 'react-popper';

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
  modifiers?: StrictModifier[];
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
    placement: placementProp = 'bottom',
  } = props;

  // Using state instead of refs to ensure popper state updates correctly.
  const [anchorElement, setAnchorElement] = React.useState<HTMLElement | VirtualElement | null>(
    null,
  );
  const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(null);
  const [placement, setPlacement] = React.useState<Placement>(placementProp);

  const config = React.useMemo(
    (): Partial<Options> => ({
      placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, gutter],
          },
        },
        {
          name: 'setPlacement',
          enabled: true,
          phase: 'main',
          fn({ state }) {
            setPlacement(state.placement);
          },
        },
        ...modifiers,
      ],
    }),
    [gutter, placement, modifiers],
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
