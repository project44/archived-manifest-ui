import * as React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * Whether the button is disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { isDisabled, tabIndex, ...other } = props;

    return (
      <button
        data-disabled={isDisabled ? '' : null}
        disabled={isDisabled}
        ref={ref}
        tabIndex={isDisabled ? -1 : tabIndex}
        type="button"
        {...other}
      />
    );
  },
);

Button.displayName = 'Button';
