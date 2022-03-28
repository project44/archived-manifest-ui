import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { RequiredIndicator } from './RequiredIndicator';
import { StyledFormControlLabel } from './FormControl.styles';
import { useFormControl } from './context';

export type FormControlLabelProps = ComponentProps<typeof StyledFormControlLabel>;

export const FormControlLabel = React.forwardRef<HTMLLabelElement, FormControlLabelProps>(
  (props: FormControlLabelProps, ref) => {
    const { children, htmlFor, id: idProp, ...other } = props;

    const { id, isDisabled, isInvalid, labelId } = useFormControl();

    return (
      <StyledFormControlLabel
        data-disabled={isDisabled ? '' : undefined}
        data-invalid={isInvalid ? '' : undefined}
        htmlFor={htmlFor ?? id}
        id={idProp ?? labelId}
        ref={ref}
        {...other}
      >
        {children}
        <RequiredIndicator />
      </StyledFormControlLabel>
    );
  },
);

FormControlLabel.displayName = 'FormControlLabel';
