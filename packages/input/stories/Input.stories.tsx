import * as React from 'react';
import { Input, InputProps } from '../src';
import { Person, Search } from '@manifest-ui/icons';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Base = (args: InputProps) => <Input {...args} />;

Base.args = {
  placeholder: 'Base',
};

export const WithIcons = Base.bind({});

WithIcons.args = {
  placeholder: 'Base',
  endIcon: <Search />,
  startIcon: <Person />,
};
