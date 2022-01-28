import * as React from 'react';
import { Add, ExpandMore } from '@manifest-ui/icons';
import { Button, ButtonProps } from '../src';
// @ts-expect-error: TODO support mdx in ts files
import docs from './Button.docs.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: ButtonProps) => <Button {...args} />;

Base.args = {
  children: 'Button',
};

export const WithIcons = Base.bind({});
WithIcons.args = {
  children: 'Button',
  endIcon: <ExpandMore />,
  startIcon: <Add />,
};
