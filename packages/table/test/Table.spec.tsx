import * as React from 'react';
import { render, screen, testA11y, userEvent } from '../../../test/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableContainer,
  TableHeader,
  TablePagination,
  TableRow,
} from '../src';

describe('@manifest-ui/table', () => {
  it('should pass accessibility', async () => {
    await testA11y(
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableColumn>Name</TableColumn>
              <TableColumn>Company</TableColumn>
              <TableColumn>Email</TableColumn>
              <TableColumn>Address</TableColumn>
              <TableColumn>Phone Number</TableColumn>
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
        </Table>
        <TablePagination />
      </TableContainer>,
    );
  });

  it('should pass accessibility with sort', async () => {
    await testA11y(
      <Table>
        <TableHeader>
          <TableRow>
            <TableColumn isSortable sortDirection="asc">
              Name
            </TableColumn>
            <TableColumn isActive isSortable sortDirection="desc">
              Company
            </TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn isSortable>Address</TableColumn>
            <TableColumn>Phone Number</TableColumn>
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
      </Table>,
    );
  });

  it('should support hover', () => {
    const onMouseEnterSpy = jest.fn();
    const onMouseLeaveSpy = jest.fn();

    render(
      <Table onMouseEnter={onMouseEnterSpy} onMouseLeave={onMouseLeaveSpy} showHover>
        <TableHeader>
          <TableRow>
            <TableColumn>Name</TableColumn>
            <TableColumn>Company</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Address</TableColumn>
            <TableColumn>Phone Number</TableColumn>
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
      </Table>,
    );

    userEvent.hover(screen.getAllByRole('row')[1]);

    expect(onMouseEnterSpy).toHaveBeenCalled();

    userEvent.unhover(screen.getAllByRole('row')[1]);

    expect(onMouseLeaveSpy).toHaveBeenCalled();
  });
});
