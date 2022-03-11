import * as React from 'react';
import { Options, Placement, VirtualElement } from '@popperjs/core';

export interface PopperContextOptions {
  anchorElement?: HTMLElement | VirtualElement | null;
  disablePortal?: boolean;
  gutter?: number;
  isOpen?: boolean;
  modifiers?: Options['modifiers'];
  placement?: Placement;
  popperElement?: HTMLElement | null;
  setAnchorElement?(node: HTMLElement | VirtualElement | null): void;
  setPopperElement?(node: HTMLElement | null): void;
}

export const PoppperContext = React.createContext<PopperContextOptions>({});

export const usePoppperContext = () => React.useContext(PoppperContext);
