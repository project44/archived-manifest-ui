import * as React from 'react';
import { Pagination, PaginationProps } from '../src';
// @ts-expect-error: TODO support mdx in ts files
import docs from './Pagination.docs.mdx';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    docs: { page: docs },
  },
};

export const Default = (args: PaginationProps) => <Pagination {...args} />;

Default.args = {
  totalRowCount: 100,
};
