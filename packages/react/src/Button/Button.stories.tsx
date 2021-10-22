import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'solid',
  children: 'Button',
};
