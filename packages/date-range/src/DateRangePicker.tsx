import * as React from 'react';
import {
  DateRangePickerProps as _DateRangePickerProps,
  Range,
  RangeKeyDict,
} from 'react-date-range';
import { Popover, PopoverContent, PopoverTrigger } from '@manifest-ui/popover';
import {
  StyledDateRange,
  StyledInput,
  StyledInputIcon,
  StyledPlaceholder,
  StyledValue,
} from './DateRangePicker.styles';
import { ComponentProps } from '@manifest-ui/styled';
import { ExpandMore } from '@manifest-ui/icons';
import { useControlled } from '@manifest-ui/hooks';

export interface DateRangePickerOptions {
  /**
   * The default value of the date range picker (controlled).
   */
  defaultValue?: Range;
  /**
   * Whether the input is disabled.
   */
  isDisabled?: boolean;
  /**
   * Placeholder for the date range picker.
   */
  placeholder?: React.ReactNode;
  /**
   * The value of the date range picker.
   */
  value?: Range;
  /**
   * Callback executed on date range change.
   */
  onChange?(range: Range): void;
}

export interface DateRangePickerProps
  extends Omit<ComponentProps<typeof StyledDateRange>, 'onChange'>,
    DateRangePickerOptions,
    Omit<_DateRangePickerProps, 'onChange'> {}

export const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  (props: DateRangePickerProps, ref) => {
    const { defaultValue, isDisabled, onChange, placeholder, value: valueProp, ...other } = props;

    const [value, setValue] = useControlled({
      defaultValue: defaultValue ?? {
        endDate: undefined,
        startDate: new Date(),
      },
      onChange,
      value: valueProp,
    });

    const hasValues = value?.endDate && value.startDate;

    const handleChange = React.useCallback(
      ({ range1 }: RangeKeyDict) => {
        setValue(range1);
      },
      [setValue],
    );

    return (
      <Popover align="start">
        <PopoverTrigger disabled={isDisabled}>
          <StyledInput
            className="manifestui-date-range-picker__input"
            data-disabled={isDisabled ? '' : null}
          >
            {!hasValues && (
              <StyledPlaceholder className="manifestui-date-range-picker__placeholder">
                {placeholder}
              </StyledPlaceholder>
            )}
            {hasValues && (
              <StyledValue className="manifestui-date-range-picker__value">{`${
                value?.startDate?.toLocaleDateString() as string
              } - ${value?.endDate?.toLocaleDateString() as string}`}</StyledValue>
            )}
            <StyledInputIcon
              className="manifestui-date-range-picker__input-icon"
              data-disabled={isDisabled ? '' : null}
            >
              <ExpandMore />
            </StyledInputIcon>
          </StyledInput>
        </PopoverTrigger>
        <PopoverContent>
          <StyledDateRange
            className="manifestui-date-range"
            onChange={handleChange}
            ranges={[value as Range]}
            ref={ref as any}
            {...other}
          />
        </PopoverContent>
      </Popover>
    );
  },
);

DateRangePicker.displayName = 'DateRangePicker';
