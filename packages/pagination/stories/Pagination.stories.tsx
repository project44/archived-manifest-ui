import * as React from 'react';
import { Pagination, PaginationProps } from '../src';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const Default = (args: PaginationProps) => <Pagination {...args} />;

Default.args = {
  totalRowCount: 100,
};
