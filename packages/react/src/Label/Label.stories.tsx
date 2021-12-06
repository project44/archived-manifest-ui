import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Flex } from '../';
import { Label, LabelProps } from './';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Label',
  size: '2',
};

export const Size: Story<LabelProps> = (args) => (
  <Flex direction="column" gap="4">
    <Label {...args} size="1">
      Label
    </Label>
    <Label {...args} size="2">
      Label
    </Label>
  </Flex>
);
