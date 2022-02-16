import * as React from 'react';
import { Pagination, PaginationProps } from '../src';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const Base = (args: PaginationProps) => <Pagination {...args} />;

Base.args = {
  totalRowCount: 100,
};
