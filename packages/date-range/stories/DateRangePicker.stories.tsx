import * as React from 'react';
import { DateRangePicker, DateRangePickerProps } from '../src';

export default {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
};

export const Default = (args: DateRangePickerProps) => <DateRangePicker {...args} />;
Default.args = {
  placeholder: 'Select Date...',
};
