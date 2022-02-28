import * as React from 'react';
import { Link, LinkProps } from '../src';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: LinkProps) => <Link {...args} />;

Default.args = {
  children: 'Link',
  href: 'https://p44design.systems/',
};
