import * as React from 'react';
import { Input, InputProps } from '../src';
import { Person, Search } from '@manifest-ui/icons';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = (args: InputProps) => <Input {...args} />;

Default.args = {
  placeholder: 'Default',
};

export const WithIcons = Default.bind({});

WithIcons.args = {
  placeholder: 'Default',
  endIcon: <Search />,
  startIcon: <Person />,
};
