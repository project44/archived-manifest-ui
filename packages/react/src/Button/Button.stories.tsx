import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './';
import type { ButtonProps } from '../';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  children: 'Solid',
  variant: 'solid',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline',
  variant: 'outline',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost',
  variant: 'ghost',
};
