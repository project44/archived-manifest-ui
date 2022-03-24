import * as React from 'react';
import FocusLock from 'react-focus-lock';

export interface FocusTrapProps
  extends Omit<React.ComponentPropsWithRef<typeof FocusLock>, 'disbled' | 'returnFocus'> {
  /**
   * Whether the focus trap is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether to restore the focus to the element focused before the trap was activated.
   *
   * @default true
   */
  restoreFocus?: boolean;
}

export const FocusTrap: React.FC<FocusTrapProps> = props => {
  const { isDisabled, restoreFocus = true, ...other } = props;

  return <FocusLock disabled={isDisabled} returnFocus={restoreFocus} {...other} />;
};

FocusTrap.displayName = 'FocusTrap';
