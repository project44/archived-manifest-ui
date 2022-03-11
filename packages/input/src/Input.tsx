import * as React from 'react';
import {
  StyledInput,
  StyledInputContainer,
  StyledInputIcon,
  StyledInputWrapper,
} from './Input.styles';
import { chainCallbacks } from '@manifest-ui/utils';
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
    onBlur,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    startIcon,
    size = 'medium',
    ...other
  } = props;

  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleBlur = React.useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const handleFocus = React.useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const handleMouseEnter = React.useCallback(() => {
    setIsHovered(true);
  }, [setIsHovered]);

  const handleMouseLeave = React.useCallback(() => {
    setIsHovered(false);
  }, [setIsHovered]);

  return (
    <StyledInputWrapper className="manifestui-input-wrapper" data-disabled={isDisabled ? '' : null}>
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
        data-has-end-icon={endIcon ? '' : undefined}
        data-has-start-icon={startIcon ? '' : undefined}
        disabled={isDisabled}
        onBlur={chainCallbacks(onBlur, handleBlur)}
        onFocus={chainCallbacks(onFocus, handleFocus)}
        onMouseEnter={chainCallbacks(onMouseEnter, handleMouseEnter)}
        onMouseLeave={chainCallbacks(onMouseLeave, handleMouseLeave)}
        ref={ref}
        readOnly={isReadOnly}
        required={isRequired}
        size={size as any}
        {...other}
      />

      <StyledInputContainer
        aria-hidden="true"
        className="manifestui-input-container"
        data-disabled={isDisabled ? '' : null}
        data-focus={isFocused ? '' : null}
        data-hover={isHovered ? '' : null}
        data-invalid={isInvalid ? '' : null}
        data-readonly={isReadOnly ? '' : null}
      />

      {endIcon && (
        <StyledInputIcon className="manifestui-input-endIcon" data-placement="end">
          {endIcon}
        </StyledInputIcon>
      )}
    </StyledInputWrapper>
  );
});

Input.displayName = 'Input';
