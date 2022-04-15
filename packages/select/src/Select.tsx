/* istanbul ignore file */
import * as React from 'react';
import { Clear, ExpandMore } from '@manifest-ui/icons';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import {
  StyledControl,
  StyledIndicatorContainer,
  StyledIndicatorsContainer,
  StyledInput,
  StyledInputIcon,
  StyledMenu,
  StyledMultiValue,
  StyledMultiValueLabel,
  StyledMultiValueRemove,
  StyledOption,
  StyledPlaceholder,
  StyledSelect,
  StyledSingleValue,
  StyledValueContainer,
} from './Select.styles';

export interface SelectProps {
  /**
   * The id to pass to the select input.
   */
  id?: string;
  /**
   * The value of the search input
   */
  inputValue?: string;
  /**
   * Whether the select is clearable.
   */
  isClearable?: boolean;
  /**
   * Whether the select is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the select is invalid.
   */
  isInvalid?: boolean;
  /**
   * Whether the select supports multiple selections.
   */
  isMulti?: boolean;
  /**
   * Whether the select is readonly.
   */
  isReadOnly?: boolean;
  /**
   * Whether the select is required.
   */
  isRequired?: boolean;
  /**
   * Whether to enable search functionality
   */
  isSearchable?: boolean;
  /**
   * Name of the HTML Input (optional - without this, no input will be rendered)
   */
  name?: string;
  /**
   * Array of options that populate the select menu
   */
  options: ReactSelectProps['options'];
  /**
   * Placeholder for the select value
   */
  placeholder?: React.ReactNode;
  /**
   * Icon to display at the start of the select
   */
  startIcon?: React.ReactNode;
  /**
   * The value of the select; reflected by the selected option
   */
  value?: ReactSelectProps['value'];
  /**
   * Callback executed on blur of the control element.
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /**
   * Callback executed on change of the select.
   */
  onChange?: ReactSelectProps['onChange'];
  /**
   * Callback executed on focus of the control element.
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  /**
   * Callback executed on change of the input
   */
  onInputChange?: ReactSelectProps['onInputChange'];
  /**
   * Callback executed on keydown events in the select.
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
}

const components: ReactSelectProps['components'] = {
  ClearIndicator: ({ innerProps }) => (
    <StyledIndicatorContainer className="manifestui-select__indicator-container" {...innerProps}>
      <Clear className="manifestui-select__clear-icon" />
    </StyledIndicatorContainer>
  ),
  Control: ({ innerProps, innerRef, children, isDisabled, isFocused }) => (
    <StyledControl
      className="manifestui-select__control"
      data-disabled={isDisabled ? '' : null}
      data-focus={isFocused ? '' : null}
      ref={innerRef}
      {...innerProps}
    >
      {children}
    </StyledControl>
  ),
  DropdownIndicator: ({ innerProps, isDisabled }) => (
    <StyledIndicatorContainer
      className="manifestui-select__indicator-container"
      data-disabled={isDisabled ? '' : undefined}
      {...innerProps}
    >
      <ExpandMore className="manifestui-select__expand-icon" />
    </StyledIndicatorContainer>
  ),
  IndicatorSeparator: null,
  IndicatorsContainer: ({ children }) => (
    <StyledIndicatorsContainer className="manifestui-select__indicators-container">
      {children}
    </StyledIndicatorsContainer>
  ),
  Input: ({ innerRef, isDisabled, isHidden, inputClassName, size, theme, ...other }) => (
    <StyledInput
      className="manifestui-select__input"
      disabled={isDisabled}
      ref={innerRef as React.LegacyRef<any>}
      {...other}
    />
  ),
  MultiValue: ({ children, innerProps, removeProps }) => (
    <StyledMultiValue className="manifestui-select__multi-value" {...innerProps}>
      <StyledMultiValueLabel className="manifestui-select__multi-value-label">
        {children}
      </StyledMultiValueLabel>
      <StyledMultiValueRemove
        className="manifestui-select__multi-value-remove"
        role="button"
        {...removeProps}
      >
        <Clear className="manifestui-select__clear-icon" />
      </StyledMultiValueRemove>
    </StyledMultiValue>
  ),
  Menu: ({ innerProps, innerRef, children }) => (
    <StyledMenu className="manifestui-select__menu" ref={innerRef} {...innerProps}>
      {children}
    </StyledMenu>
  ),
  Option: ({ innerProps, innerRef, children, isFocused, isSelected, isDisabled }) => (
    <StyledOption
      className="manifestui-select__option"
      data-disabled={isDisabled ? '' : null}
      data-focus={isFocused ? '' : null}
      data-selected={isSelected ? '' : null}
      ref={innerRef}
      {...innerProps}
    >
      {children}
    </StyledOption>
  ),
  Placeholder: ({ children, selectProps }) => {
    const { startIcon } = selectProps;
    return (
      <StyledPlaceholder className="manifestui-select__placeholder">
        {startIcon && (
          <StyledInputIcon className="manifestui-input-startIcon" data-placement="start">
            {startIcon}
          </StyledInputIcon>
        )}
        {children}
      </StyledPlaceholder>
    );
  },
  SingleValue: ({ innerProps, children }) => (
    <StyledSingleValue className="manifestui-select__single-value" {...innerProps}>
      {children}
    </StyledSingleValue>
  ),
  ValueContainer: ({ children, isDisabled, selectProps, theme, ...other }) => {
    const { startIcon } = selectProps;
    return (
      <StyledValueContainer className="manifestui-select__value-container" {...other}>
        {startIcon && (
          <StyledInputIcon className="manifestui-input-startIcon" data-placement="start">
            {startIcon}
          </StyledInputIcon>
        )}
        {children}
      </StyledValueContainer>
    );
  },
};

export const Select = React.forwardRef<HTMLDivElement, SelectProps>((props: SelectProps, ref) => {
  const { id, placeholder, isSearchable = false, startIcon, ...other } = props;

  return (
    <StyledSelect className="manifestui-select" ref={ref}>
      <ReactSelect
        id={id && `__${id}__`}
        components={components}
        inputId={id}
        isSearchable={isSearchable}
        placeholder={placeholder ?? ''}
        startIcon={startIcon}
        {...other}
      />
    </StyledSelect>
  );
});

Select.displayName = 'Select';
