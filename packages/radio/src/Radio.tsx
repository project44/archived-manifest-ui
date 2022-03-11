import * as React from 'react';
import {
  StyledRadioContainer,
  StyledRadioInput,
  StyledRadioLabel,
  StyledRadioText,
} from './Radio.styles';
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
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    value,
    ...other
  } = props;

  const id = useId(idProp);

  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  let isChecked = isCheckedProp;

  if (group?.value && value) {
    isChecked = group.value === value;
  }

  const handleBlur = React.useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const handleFocus = React.useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === ' ') {
        setIsActive(true);
      }
    },
    [setIsActive],
  );

  const handleKeyUp = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === ' ') {
        setIsActive(false);
      }
    },
    [setIsActive],
  );

  const handleMouseDown = React.useCallback(() => {
    setIsActive(true);
  }, [setIsActive]);

  const handleMouseEnter = React.useCallback(() => {
    setIsHovered(true);
  }, [setIsHovered]);

  const handleMouseLeave = React.useCallback(() => {
    setIsHovered(false);
  }, [setIsHovered]);

  const handleMouseUp = React.useCallback(() => {
    setIsActive(false);
  }, [setIsActive]);

  return (
    <StyledRadioLabel
      className="manifestui-radio-label"
      data-disabled={isDisabled ? '' : undefined}
    >
      <StyledRadioInput
        aria-disabled={isDisabled}
        checked={isChecked}
        className="manifestui-radio-input"
        disabled={isDisabled}
        id={id}
        name={name}
        onBlur={chainCallbacks(onBlur, handleBlur)}
        onFocus={chainCallbacks(onFocus, handleFocus)}
        onChange={chainCallbacks(group?.onChange, onChange)}
        onKeyDown={chainCallbacks(onKeyDown, handleKeyDown)}
        onKeyUp={chainCallbacks(onKeyUp, handleKeyUp)}
        ref={ref}
        readOnly={isReadOnly}
        required={isRequired}
        value={value}
        type="radio"
      />
      <StyledRadioContainer
        aria-hidden="true"
        data-active={isActive ? '' : null}
        data-checked={isChecked ? '' : null}
        data-disabled={isDisabled ? '' : null}
        data-focus={isFocused ? '' : null}
        data-hover={isHovered ? '' : null}
        data-readonly={isReadOnly ? '' : null}
        className="manifestui-radio-container"
        onMouseDown={chainCallbacks(onMouseDown, handleMouseDown)}
        onMouseEnter={chainCallbacks(onMouseEnter, handleMouseEnter)}
        onMouseLeave={chainCallbacks(onMouseLeave, handleMouseLeave)}
        onMouseUp={chainCallbacks(onMouseUp, handleMouseUp)}
        {...other}
      />
      {children && <StyledRadioText className="manifestui-radio-text">{children}</StyledRadioText>}
    </StyledRadioLabel>
  );
});

Radio.displayName = 'Radio';
