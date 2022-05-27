import * as React from 'react';
import { CSS, VariantProps } from '../../styles';
import { StyledButton, StyledButtonIcon } from './Button.styles';

export interface ButtonProps
  extends React.ComponentProps<typeof StyledButton>,
    VariantProps<typeof StyledButton> {
  /**
   * Styles applied to the button.
   */
  css?: CSS;
  /**
   * Icon added after the button text.
   */
  endIcon?: React.ReactElement;
  /**
   * Whether the button is disabled.
   */
  isDisabled?: boolean;
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
}

export const Button = React.forwardRef<React.ElementRef<typeof StyledButton>, ButtonProps>(
  (props, ref) => {
    const { children, endIcon, isDisabled, startIcon, ...other } = props;

    return (
      <StyledButton {...other} disabled={isDisabled} ref={ref}>
        {startIcon && (
          <StyledButtonIcon className="manifest-button-icon-start">{startIcon}</StyledButtonIcon>
        )}
        <span className="manifest-button-text">{children}</span>
        {endIcon && (
          <StyledButtonIcon className="manifest-button-icon-end">{endIcon}</StyledButtonIcon>
        )}
      </StyledButton>
    );
  },
);
