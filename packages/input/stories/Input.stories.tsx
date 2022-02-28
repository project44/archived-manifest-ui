import * as React from 'react';
import { Input, InputProps } from '../src';
import { Person, Search } from '@manifest-ui/icons';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = (args: InputProps) => <Input {...args} />;

Default.args = {
  placeholder: 'Base',
};

export const WithIcons = Default.bind({});

WithIcons.args = {
  placeholder: 'Base',
  endIcon: <Search />,
  startIcon: <Person />,
};
