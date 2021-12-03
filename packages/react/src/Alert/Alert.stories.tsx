import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Flex } from '../';
import { Alert, AlertProps } from './';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Manifest is going live. Get ready!',
  status: 'info',
  variant: 'subtle',
};

export const Status: Story<AlertProps> = (args) => (
  <Flex direction="column" gap="4">
    <Alert {...args} status="info">
      Alert
    </Alert>
    <Alert {...args} status="success">
      Alert
    </Alert>
    <Alert {...args} status="warning">
      Alert
    </Alert>
    <Alert {...args} status="danger">
      Alert
    </Alert>
  </Flex>
);

export const Variant: Story<AlertProps> = (args) => (
  <Flex direction="column" gap="4">
    <Alert status="success" {...args} variant="subtle">
      Alert
    </Alert>
    <Alert status="success" {...args} variant="solid">
      Alert
    </Alert>
  </Flex>
);
