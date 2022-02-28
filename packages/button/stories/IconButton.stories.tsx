import * as React from 'react';
import { IconButton, IconButtonProps } from '../src';
import { Add } from '@manifest-ui/icons';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

export const Default = (args: IconButtonProps) => <IconButton {...args} />;

Default.args = {
  onClick: () => alert('Hello'),
  children: <Add />,
};
