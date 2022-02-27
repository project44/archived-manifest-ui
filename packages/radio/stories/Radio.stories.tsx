import * as React from 'react';
import { Radio, RadioGroup, RadioGroupProps } from '../src';
import { Meta } from '@storybook/react';

export default {
  title: 'Components/Radio',
  subcomponents: { Radio, RadioGroup },
  component: RadioGroup,
} as Meta;

export const Base = (args: RadioGroupProps) => (
  <RadioGroup defaultValue="one" {...args}>
    <Radio value="one">One</Radio>
    <Radio value="two">Two</Radio>
    <Radio value="three">Three</Radio>
  </RadioGroup>
);
