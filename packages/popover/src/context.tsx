import * as React from 'react';
import { VirtualElement } from '@popperjs/core';

export interface PopoverContextOptions {
  anchorRef?: React.RefObject<Element | VirtualElement | null>;
  hasAnchor?: boolean;
  id?: string;
  isOpen?: boolean;
  popoverRef?: React.RefObject<HTMLDivElement>;
  triggerRef?: React.RefObject<HTMLButtonElement>;
  onClickOutside?(event: TouchEvent | MouseEvent): void;
  onEscapeKeyDown?(event: KeyboardEvent): void;
  setIsOpen?(open: boolean): void;
  setHasAnchor?(hasAnchor: boolean): void;
}

export const PopoverContext = React.createContext<PopoverContextOptions>({});

export const usePopoverContext = () => React.useContext(PopoverContext);
