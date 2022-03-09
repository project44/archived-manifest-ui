import * as React from 'react';
import FocusLock from 'react-focus-lock';

export interface FocusTrapProps {
  /**
   * Whether to automattically focus the first focusable element within the trap.
   *
   * @default true
   */
  autoFocus?: boolean;
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
  const { autoFocus = true, children, isDisabled, restoreFocus = true } = props;

  return (
    // eslint-disable-next-line jsx-a11y/no-autofocus
    <FocusLock autoFocus={autoFocus} disabled={isDisabled} returnFocus={restoreFocus}>
      {children}
    </FocusLock>
  );
};

FocusTrap.displayName = 'FocusTrap';
