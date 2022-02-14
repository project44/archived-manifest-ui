import * as React from 'react';
import { StyledInput, StyledInputContainer, StyledInputIcon } from './Input.styles';
import { ComponentProps } from '@manifest-ui/styled';

export interface InputOptions {
  /**
   * Icon displayed at the end of the text field.
   *
   * @example
   * <TextField endIcon={Phone} />
   */
  endIcon?: React.ReactNode;
  /**
   * Whether the input is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the input is invalid.
   */
  isInvalid?: boolean;
  /**
   * Whether the input is readonly.
   */
  isReadOnly?: boolean;
  /**
   * Whether the input is required.
   */
  isRequired?: boolean;
  /**
   * The size of the input.
   *
   * @default 'medium'
   */
  size?: 'medium' | 'small';
  /**
   * Icon displayed at the start of the text field.
   *
   * @example
   * <TextField startIcon={Phone} />
   */
  startIcon?: React.ReactNode;
}

export type InputProps = Omit<ComponentProps<typeof StyledInput>, 'size'> & InputOptions;

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const {
    endIcon,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    startIcon,
    size = 'medium',
    ...other
  } = props;

  return (
    <StyledInputContainer className="manifestui-input-container">
      {startIcon && (
        <StyledInputIcon className="manifestui-input-startIcon" data-placement="start">
          {startIcon}
        </StyledInputIcon>
      )}

      <StyledInput
        aria-invalid={isInvalid ? true : undefined}
        aria-readonly={isReadOnly || isDisabled ? true : undefined}
        aria-required={isRequired ? true : undefined}
        className="manifestui-input"
        data-invalid={isInvalid ? '' : undefined}
        data-has-endIcon={endIcon ? '' : undefined}
        data-has-startIcon={startIcon ? '' : undefined}
        disabled={isDisabled}
        ref={ref}
        readOnly={isReadOnly}
        required={isRequired}
        size={size as any}
        {...other}
      />

      {endIcon && (
        <StyledInputIcon className="manifestui-input-endIcon" data-placement="end">
          {endIcon}
        </StyledInputIcon>
      )}
    </StyledInputContainer>
  );
});

Input.displayName = 'Input';
