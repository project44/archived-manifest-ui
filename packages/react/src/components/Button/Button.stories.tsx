import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'radio' },
      defaultValue: 'medium',
      options: ['small', 'medium'],
    },
    variant: {
      control: { type: 'radio' },
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
};
