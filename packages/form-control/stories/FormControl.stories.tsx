import * as React from 'react';
import { FormControl, FormControlHelperText, FormControlLabel, useFormControl } from '../src';
import { Input, InputProps } from '@manifest-ui/input';
import { chainCallbacks } from '@manifest-ui/utils';
import { Meta } from '@storybook/react';

export default {
  title: 'Components/FormControl',
  component: FormControl,
} as Meta;

function TestInput(props: InputProps) {
  const {
    hasHelperText,
    helperTextId,
    id,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    onBlur,
    onFocus,
  } = useFormControl();

  const ariaProps = {
    'aria-invalid': isInvalid ? true : undefined,
    'aria-readonly': isReadOnly ? true : undefined,
    'aria-required': isReadOnly ? true : undefined,
    ...(hasHelperText && {
      'aria-describedby': helperTextId,
    }),
  };

  return (
    <Input
      isDisabled={isDisabled}
      id={props.id ?? id}
      onBlur={chainCallbacks(onBlur, props.onBlur)}
      onFocus={chainCallbacks(onFocus, props.onFocus)}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      {...ariaProps}
      {...props}
    />
  );
}

export const Default = () => (
  <FormControl>
    <FormControlLabel>FormControl</FormControlLabel>
    <TestInput placeholder="input" />
    <FormControlHelperText>This is helper text</FormControlHelperText>
  </FormControl>
);
