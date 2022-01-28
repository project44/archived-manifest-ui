import * as React from 'react';
import { Fab, FabProps } from '../src';
import { Add } from '@manifest-ui/icons';
// @ts-expect-error: TODO support mdx in ts files
import docs from './Fab.docs.mdx';

export default {
  title: 'Components/Fab',
  component: Fab,
  parameters: {
    docs: { page: docs },
  },
};

export const Base = (args: FabProps) => <Fab {...args} />;

Base.args = {
  onClick: () => alert('Hello'),
  children: <Add />,
};
