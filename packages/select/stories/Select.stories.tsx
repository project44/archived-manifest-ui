import * as React from 'react';
import { Select, SelectProps } from '../src';
import { Meta } from '@storybook/react';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

export const Default = (args: SelectProps) => <Select {...args} />;

Default.args = {
  options: [
    { label: 'Running Late', value: 'late' },
    { label: 'Running Early', value: 'early' },
    { label: 'Estimated Time', value: 'estimated' },
    { label: 'Planned Time', value: 'planned' },
    { label: 'Actual Time', value: 'actual' },
    { label: 'Stop Name', value: 'stop' },
  ],
  placeholder: 'Base',
};
