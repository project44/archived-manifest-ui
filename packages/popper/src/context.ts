import * as React from 'react';
import { Options, VirtualElement } from '@popperjs/core';

export interface PopperContextOptions {
  anchorElement?: HTMLElement | VirtualElement | null;
  config?: Partial<Options>;
  disablePortal?: boolean;
  isOpen?: boolean;
  popperElement?: HTMLElement | null;
  setAnchorElement?(node: HTMLElement | VirtualElement | null): void;
  setPopperElement?(node: HTMLElement | null): void;
}

export const PoppperContext = React.createContext<PopperContextOptions>({});

export const usePoppperContext = () => React.useContext(PoppperContext);
