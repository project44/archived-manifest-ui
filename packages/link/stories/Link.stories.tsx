import * as React from 'react';
import { Link, LinkProps } from '../src';
// @ts-expect-error: TODO support mdx in ts files
import docs from './Link.docs.mdx';

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: LinkProps) => <Link {...args} />;

Default.args = {
  children: 'Link',
  href: 'https://p44design.systems/',
};
