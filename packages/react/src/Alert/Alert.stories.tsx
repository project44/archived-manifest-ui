import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Alert, AlertProps } from './';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  children: 'Info',
  status: 'info',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success',
  status: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning',
  status: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  status: 'danger',
};
