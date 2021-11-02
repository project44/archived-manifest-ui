import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Label, LabelProps } from './';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      description: 'Different types of labels',
      table: {
        type: {
          summary: 'body1|body2',
        },
        defaultValue: { summary: 'body1' },
      },
      control: { type: 'radio' },
      options: ['body1', 'body2'],
    },
    children: {
      description: 'Inner text for label element',
      table: {
        type: { summary: 'text|node' },
      },
    },
  },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Label',
  variant: 'body1',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Label',
  variant: 'body2',
};
