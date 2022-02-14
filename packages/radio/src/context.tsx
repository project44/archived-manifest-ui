import * as React from 'react';

export interface RadioGroupContextValue {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  name?: string;
  value?: string | number;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const RadioGroupContext = React.createContext<RadioGroupContextValue>({});

export const useRadioGroupContext = () => React.useContext(RadioGroupContext);
