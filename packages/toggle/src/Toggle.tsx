import * as React from 'react';
import { StyledToggleInput, StyledToggleLabel, StyledToggleText } from './Toggle.styles';
import { useControlled, useId } from '@manifest-ui/hooks';
import { ComponentProps } from '@manifest-ui/styled';

export interface ToggleOptions {
  /**
   * Content to be rendered
   */
  children?: React.ReactNode;
  /**
   * Whether the toggle is checked by default.
   */
  defaultChecked?: boolean;
  /**
   * Whether the toggle is checked.
   */
  isChecked?: boolean;
  /**
   * Whether the toggle is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the toggle is readonly.
   */
  isReadOnly?: boolean;
  /**
   * Whether the toggle is required.
   */
  isRequired?: boolean;
}

export interface ToggleProps extends ComponentProps<typeof StyledToggleInput>, ToggleOptions {}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>((props: ToggleProps, ref) => {
  const {
    children,
    defaultChecked,
    id: idProp,
    isChecked: isCheckedProp,
    isDisabled,
    isReadOnly,
    isRequired,
    name,
    onChange,
    value,
    ...other
  } = props;

  const id = useId(idProp);

  const [isChecked, setIsChecked] = useControlled({
    defaultValue: defaultChecked ?? false,
    value: isCheckedProp,
  });

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isReadOnly || isDisabled) {
        event.stopPropagation();
        event.preventDefault();

        return;
      }

      setIsChecked(!isChecked);

      onChange?.(event);
    },
    [isChecked, isDisabled, isReadOnly, onChange, setIsChecked],
  );

  return (
    <StyledToggleLabel
      className="manifestui-toggle-label"
      data-checked={isChecked ? '' : undefined}
      data-disabled={isDisabled ? '' : undefined}
    >
      <StyledToggleInput
        aria-disabled={isDisabled}
        checked={isChecked}
        className="manifestui-toggle-input"
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={handleChange}
        ref={ref}
        readOnly={isReadOnly}
        required={isRequired}
        value={value}
        type="checkbox"
        {...other}
      />
      {children && (
        <StyledToggleText className="manifestui-toggle-text">{children}</StyledToggleText>
      )}
    </StyledToggleLabel>
  );
});

Toggle.displayName = 'Toggle';
