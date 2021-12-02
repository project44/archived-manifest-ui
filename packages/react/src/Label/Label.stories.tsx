import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Label, LabelProps } from './';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  children: 'Label',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Label',
  size: 'small',
};
