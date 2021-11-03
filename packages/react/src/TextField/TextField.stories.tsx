import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextField, TextFieldProps } from './';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {},
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  children: 'TextField',
};
