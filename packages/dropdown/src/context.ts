import * as React from 'react';
import { FocusTrapProps } from '@manifest-ui/focus-trap';

export interface DropdownContextOptions extends Omit<FocusTrapProps, 'disabled' | 'children'> {
  /**
   * Whether the focus trap is disabled.
   */
  disableFocusTrap?: boolean;
}

export const DropdownContext = React.createContext<DropdownContextOptions>({});

export const useDropdownContext = () => React.useContext(DropdownContext);
