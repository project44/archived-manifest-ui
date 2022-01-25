import * as React from 'react';
import { Button, ButtonProps } from '../src';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
