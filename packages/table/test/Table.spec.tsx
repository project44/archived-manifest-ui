import * as React from 'react';
import { Table, TableBody, TableCell, TableFooter, TableHeader, TableRow } from '../src';
import { testA11y } from '../../../test/utils';

describe('@manifest-ui/table', () => {
  it('should pass accessibility', async () => {
    await testA11y(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>123 Fake St.</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>test@test.com</TableCell>
            <TableCell>Tester McTest</TableCell>
            <TableCell>123-456-7890</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );
  });
});
