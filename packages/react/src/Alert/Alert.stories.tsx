import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Alert, AlertProps } from './';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    status: {
      name: 'status',
      type: { name: 'string', required: false },
      description: 'Different types of alerts',
      table: {
        type: {
          summary: 'neutral|info|success|warning|danger',
        },
        defaultValue: { summary: 'neutral' },
      },
      control: { type: 'radio' },
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
    },
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      description: 'Different types of alerts',
      table: {
        type: {
          summary: 'subtle|solid',
        },
        defaultValue: { summary: 'subtle' },
      },
      control: { type: 'radio' },
      options: ['subtle', 'solid'],
    },
  },
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
