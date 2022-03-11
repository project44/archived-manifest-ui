import * as React from 'react';
import { StyledTextarea, StyledTextareaContainer, StyledTextareaWrapper } from './Textarea.styles';
import { chainCallbacks } from '@manifest-ui/utils';
import { ComponentProps } from '@manifest-ui/styled';

export interface TextareaOptions {
  /**
   * Whether the textarea is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the textarea is invalid.
   */
  isInvalid?: boolean;
  /**
   * Whether the textarea is readonly.
   */
  isReadOnly?: boolean;
  /**
   * Whether the textarea is required.
   */
  isRequired?: boolean;
}

export type TextareaProps = ComponentProps<typeof StyledTextarea> & TextareaOptions;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props: TextareaProps, ref) => {
    const {
      isDisabled,
      isInvalid,
      isReadOnly,
      isRequired,
      onBlur,
      onFocus,
      onMouseEnter,
      onMouseLeave,
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
      <StyledTextareaWrapper className="manifestui-textarea-wrapper">
        <StyledTextarea
          aria-invalid={isInvalid ? true : undefined}
          aria-readonly={isReadOnly || isDisabled ? true : undefined}
          aria-required={isRequired ? true : undefined}
          className="manifestui-textarea"
          data-invalid={isInvalid ? '' : undefined}
          disabled={isDisabled}
          onBlur={chainCallbacks(onBlur, handleBlur)}
          onFocus={chainCallbacks(onFocus, handleFocus)}
          onMouseEnter={chainCallbacks(onMouseEnter, handleMouseEnter)}
          onMouseLeave={chainCallbacks(onMouseLeave, handleMouseLeave)}
          ref={ref}
          readOnly={isReadOnly}
          required={isRequired}
          {...other}
        />
        <StyledTextareaContainer
          aria-hidden="true"
          className="manifestui-textarea-container"
          data-disabled={isDisabled ? '' : null}
          data-focus={isFocused ? '' : null}
          data-hover={isHovered ? '' : null}
          data-invalid={isInvalid ? '' : null}
          data-readonly={isReadOnly ? '' : null}
        />
      </StyledTextareaWrapper>
    );
  },
);

Textarea.displayName = 'Textarea';
