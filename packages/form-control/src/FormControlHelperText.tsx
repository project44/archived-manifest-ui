import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledFormControlHelperText } from './FormControl.styles';
import { useFormControl } from './context';
import { useMergedRef } from '@manifest-ui/hooks';

export type FormControlHelperTextProps = ComponentProps<typeof StyledFormControlHelperText>;

export const FormControlHelperText = React.forwardRef<HTMLDivElement, FormControlHelperTextProps>(
  (props: FormControlHelperTextProps, ref) => {
    const { id: idProp, ...other } = props;

    const { helperTextId, isInvalid, setHasHelperText } = useFormControl();

    const mergedRef = useMergedRef(ref, node => {
      if (!node) return;

      setHasHelperText?.(true);
    });

    return (
      <StyledFormControlHelperText
        data-invalid={isInvalid ? '' : null}
        id={idProp ?? helperTextId}
        ref={mergedRef}
        {...other}
      />
    );
  },
);

FormControlHelperText.displayName = 'FormControlHelperText';
