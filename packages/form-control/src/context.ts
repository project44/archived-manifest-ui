import * as React from 'react';

export interface FormControlContextOptions {
  hasHelperText?: boolean;
  helperTextId?: string;
  id?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  labelId?: string;
  setHasHelperText?(hasHelperText: boolean): void;
  onFocus?(event: React.FocusEvent<HTMLElement>): void;
  onBlur?(event: React.FocusEvent<HTMLElement>): void;
}

export const FormControlContext = React.createContext<FormControlContextOptions>({});

export const useFormControl = () => React.useContext(FormControlContext);
