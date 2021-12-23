import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AddIcon } from '../';
import { VisuallyHidden, VisuallyHiddenProps } from './';

export default {
  title: 'Utilities/VisuallyHidden',
  component: VisuallyHidden,
} as Meta;

export const Basic: Story<VisuallyHiddenProps> = (args) => (
  <button>
    <AddIcon />
    <VisuallyHidden {...args} />
  </button>
);

Basic.args = {
  asChild: false,
  children: 'Add item',
};
