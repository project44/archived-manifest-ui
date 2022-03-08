import * as React from 'react';
import { StyledRadioInput, StyledRadioLabel, StyledRadioText } from './Radio.styles';
import { chainCallbacks } from '@manifest-ui/utils';
import { ComponentProps } from '@manifest-ui/styled';
import { useId } from '@manifest-ui/hooks';
import { useRadioGroupContext } from './context';

export interface RadioOptions {
  /**
   * Content to be rendered
   */
  children?: React.ReactNode;
  /**
   * Whether the radio is checked by default.
   */
  defaultChecked?: boolean;
  /**
   * Whether the radio is checked.
   */
  isChecked?: boolean;
  /**
   * Whether the radio is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the radio is readonly.
   */
  isReadOnly?: boolean;
  /**
   * Whether the radio is required.
   */
  isRequired?: boolean;
}

export interface RadioProps extends ComponentProps<typeof StyledRadioInput>, RadioOptions {}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref) => {
  const group = useRadioGroupContext();

  const {
    children,
    id: idProp,
    isChecked: isCheckedProp,
    isDisabled = group?.isDisabled,
    isReadOnly = group?.isReadOnly,
    isRequired,
    name = group.name,
    onChange,
    value,
    ...other
  } = props;

  const id = useId(idProp);

  let isChecked = isCheckedProp;

  if (group?.value && value) {
    isChecked = group.value === value;
  }

  return (
    <StyledRadioLabel
      className="manifestui-radio-label"
      data-checked={isChecked ? '' : undefined}
      data-disabled={isDisabled ? '' : undefined}
    >
      <StyledRadioInput
        aria-disabled={isDisabled}
        checked={isChecked}
        className="manifestui-radio-input"
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={chainCallbacks(group?.onChange, onChange)}
        ref={ref}
        readOnly={isReadOnly}
        required={isRequired}
        value={value}
        type="radio"
        {...other}
      />
      {children && <StyledRadioText className="manifestui-radio-text">{children}</StyledRadioText>}
    </StyledRadioLabel>
  );
});

Radio.displayName = 'Radio';
