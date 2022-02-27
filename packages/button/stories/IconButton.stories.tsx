import * as React from 'react';
import { IconButton, IconButtonProps } from '../src';
import { Add } from '@manifest-ui/icons';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

export const Base = (args: IconButtonProps) => <IconButton {...args} />;

Base.args = {
  onClick: () => alert('Hello'),
  children: <Add />,
};
