import * as React from 'react';
import { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer';

export type Align = 'center' | 'end' | 'start';
export type Placement = 'bottom' | 'left' | 'right' | 'top';

export interface PopoverContextOptions {
  /**
   * Alignment of the menu in relation to its trigger.
   *
   * @default `center`
   */
  align?: Align;
  /**
   * The offset of the menu in relation to its trigger.
   */
  offset?: [crossAxis: number, mainAxis: number];
  /**
   * Placement of the menu in relation to its trigger.
   *
   * @default `bottom`
   */
  placement?: Placement;
  /**
   * Callback fired when a click or focus event is register outside the dialog.
   */
  onOutsideClick?(event: FocusOutsideEvent | PointerDownOutsideEvent): void;
  /**
   * Callback fired when the dialog is closed.
   */
  onEscapeKeyDown?(event: KeyboardEvent): void;
}

export const PopoverContext = React.createContext<PopoverContextOptions>({});

export const usePopoverContext = () => React.useContext(PopoverContext);
