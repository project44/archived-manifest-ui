import * as React from 'react';
import { FormControl, FormControlHelperText, FormControlLabel, useFormControl } from '../src';
import { render, screen, testA11y } from '../../../test/utils';
import { chainCallbacks } from '@manifest-ui/utils';

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
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
    <input
      disabled={isDisabled}
      id={props.id ?? id}
      onBlur={chainCallbacks(onBlur, props.onBlur)}
      onFocus={chainCallbacks(onFocus, props.onFocus)}
      readOnly={isReadOnly}
      required={isRequired}
      {...ariaProps}
      {...props}
    />
  );
}

describe('@manifest-ui/form-control', () => {
  it('should pass accessibility', async () => {
    await testA11y(
      <FormControl id="input">
        <FormControlLabel>Input</FormControlLabel>
        <Input placeholder="input" />
        <FormControlHelperText>This is helper text</FormControlHelperText>
      </FormControl>,
    );
  });

  it('should pass accessibility when required', async () => {
    await testA11y(
      <FormControl id="input" isRequired>
        <FormControlLabel>Input</FormControlLabel>
        <Input placeholder="input" />
        <FormControlHelperText>This is helper text</FormControlHelperText>
      </FormControl>,
    );
  });

  it('should pass accessibility when invalid', async () => {
    await testA11y(
      <FormControl id="input" isInvalid>
        <FormControlLabel>Input</FormControlLabel>
        <Input placeholder="input" />
        <FormControlHelperText>This input is invalid</FormControlHelperText>
      </FormControl>,
    );
  });

  it('should render', () => {
    render(
      <FormControl id="input">
        <FormControlLabel>Input</FormControlLabel>
        <Input placeholder="input" />
        <FormControlHelperText>This is helper text</FormControlHelperText>
      </FormControl>,
    );

    expect(screen.getByRole('group')).toBeVisible();
  });

  it('should render required indicator', () => {
    const { rerender } = render(
      <FormControl id="input" isRequired>
        <FormControlLabel>Input</FormControlLabel>
        <Input placeholder="input" />
        <FormControlHelperText>This is helper text</FormControlHelperText>
      </FormControl>,
    );

    const indicator = screen.getByRole('presentation', { hidden: true });

    expect(indicator).toBeVisible();
    expect(indicator).toHaveTextContent('*');

    rerender(
      <FormControl id="input">
        <FormControlLabel>Input</FormControlLabel>
        <Input placeholder="input" />
        <FormControlHelperText>This is helper text</FormControlHelperText>
      </FormControl>,
    );

    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });
});
