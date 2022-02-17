import * as React from 'react';
import { Table, TableBody, TableCell, TableHeader, TableProps, TableRow } from '../src';

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: { TableBody, TableCell, TableHeader, TableRow },
};

export const Base = (args: TableProps) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableCell>ID#</TableCell>
        <TableCell>Origin</TableCell>
        <TableCell>Destination</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Timing</TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>23423-435</TableCell>
        <TableCell>Alachua Distribution Center, Chicago, IL</TableCell>
        <TableCell>S01541, Northborough, Massachusetts</TableCell>
        <TableCell>In Transit</TableCell>
        <TableCell>On Track</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

Base.args = {
  children: 'Button',
};
