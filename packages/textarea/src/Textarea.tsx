import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledTextarea } from './Textarea.styles';

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
    const { isDisabled, isInvalid, isReadOnly, isRequired, ...other } = props;

    return (
      <StyledTextarea
        aria-invalid={isInvalid ? true : undefined}
        aria-readonly={isReadOnly || isDisabled ? true : undefined}
        aria-required={isRequired ? true : undefined}
        className="manifestui-textarea"
        data-invalid={isInvalid ? '' : undefined}
        disabled={isDisabled}
        ref={ref}
        readOnly={isReadOnly}
        required={isRequired}
        {...other}
      />
    );
  },
);

Textarea.displayName = 'Textarea';
