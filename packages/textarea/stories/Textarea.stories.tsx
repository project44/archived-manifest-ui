import * as React from 'react';
import { Textarea, TextareaProps } from '../src';

export default {
  title: 'Components/Textarea',
  component: Textarea,
};

export const Default = (args: TextareaProps) => <Textarea {...args} />;

Default.args = {
  placeholder: 'Default',
};
