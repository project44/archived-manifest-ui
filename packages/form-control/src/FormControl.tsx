import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { FormControlContext } from './context';
import { StyledFormControl } from './FormControl.styles';
import { useId } from '@manifest-ui/hooks';

export interface FormControlOptions {
  /**
   * Whether the control is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the control is invalid.
   */
  isInvalid?: boolean;
  /**
   * Whether the control is readonly.
   */
  isReadOnly?: boolean;
  /**
   * Whether the control is required.
   */
  isRequired?: boolean;
}

export interface FormControlProps
  extends ComponentProps<typeof StyledFormControl>,
    FormControlOptions {}

export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  (props: FormControlProps, ref) => {
    const {
      id: idProp,
      isDisabled,
      isInvalid,
      isReadOnly,
      isRequired,
      onBlur,
      onFocus,
      ...other
    } = props;

    const id = useId(idProp);

    const labelId = `${id}-label`;
    const helperTextId = `${id}-helperText`;

    /**
     * Used to determine if we should apply an `aria-describedBy` for the `input`.
     */
    const [hasHelperText, setHasHelperText] = React.useState(false);

    return (
      <FormControlContext.Provider
        value={{
          hasHelperText,
          helperTextId,
          id,
          isDisabled,
          isInvalid,
          isReadOnly,
          isRequired,
          labelId,
          setHasHelperText,
          onBlur,
          onFocus,
        }}
      >
        <StyledFormControl ref={ref} role="group" {...other} />
      </FormControlContext.Provider>
    );
  },
);

FormControl.displayName = 'FormControl';
