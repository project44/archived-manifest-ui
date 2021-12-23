import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Portal, PortalProps } from './';

export default {
  title: 'Utilities/Portal',
  component: Portal,
} as Meta;

export const Basic: Story<PortalProps> = (args) => <Portal {...args} />;

Basic.args = {
  asChild: false,
  children: 'Content',
};
