import * as React from 'react';
import { useControlled, useId } from '@manifest-ui/hooks';
import { RadioGroupContext } from './context';
import { StyledRadioGroup } from './Radio.styles';

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof StyledRadioGroup> {
  /**
   * The value of the default checked radio.
   */
  defaultValue?: string | number;
  /**
   * The display direction of the radio group
   *
   * @default 'vertical'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Whether all radios are  disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the entire group is readonly.
   */
  isReadOnly?: boolean;
  /**
   * The name applied to all radio inputs.
   *
   * Radios must share a name for form accessibility.
   */
  name?: string;
  /**
   * The value of the checked radio.
   */
  value?: string | number;
  /**
   * Callback executed on radio change.
   */
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props: RadioGroupProps, ref) => {
    const {
      defaultValue,
      direction = 'vertical',
      isDisabled,
      isReadOnly,
      name: nameProp,
      onChange,
      value: valueProp,
      ...other
    } = props;

    const name = useId(nameProp);

    const [value, setValue] = useControlled({
      defaultValue: defaultValue ?? '',
      value: valueProp,
    });

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isReadOnly || isDisabled) {
          event.stopPropagation();
          event.preventDefault();

          return;
        }

        setValue(event.target.value);

        onChange?.(event);
      },
      [isDisabled, isReadOnly, onChange, setValue],
    );

    return (
      <RadioGroupContext.Provider
        value={{
          isDisabled,
          isReadOnly,
          name,
          value,
          onChange: handleChange,
        }}
      >
        <StyledRadioGroup data-direction={direction} ref={ref} role="radiogroup" {...other} />
      </RadioGroupContext.Provider>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
