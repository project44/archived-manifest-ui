import * as React from 'react';
import { IconButton, IconButtonProps } from '../src';
import { Add } from '@manifest-ui/icons';
// @ts-expect-error: TODO support mdx in ts files
import docs from './IconButton.docs.mdx';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    docs: { page: docs },
  },
};

export const Base = (args: IconButtonProps) => <IconButton {...args} />;

Base.args = {
  onClick: () => alert('Hello'),
  children: <Add />,
};
