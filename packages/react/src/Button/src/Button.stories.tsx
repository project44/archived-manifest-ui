import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Success',
  variant: 'tertiary',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success',
  tone: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  tone: 'danger',
};
