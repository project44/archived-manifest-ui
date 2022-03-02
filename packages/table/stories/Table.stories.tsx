import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableContainer,
  TableHeader,
  TablePagination,
  TableProps,
  TableRow,
} from '../src';
import { Box } from '@manifest-ui/layout';

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: { TableBody, TableCell, TableColumn, TableHeader, TableRow },
  argTypes: {
    showHover: {
      control: { type: 'boolean' },
    },
  },
};

const rows = [
  { id: '001', name: 'Starbucks', country: 'United States', state: 'Washington', status: 'Active' },
  { id: '005', name: 'Paystack', country: 'Kenya', state: 'Nairobi', status: 'Pending' },
  { id: '002', name: 'Nike', country: 'Canada', state: 'Ottawa', status: 'Active' },
  {
    id: '004',
    name: 'O2',
    country: 'United Kingdom',
    state: 'London',
    status: 'Pending',
  },
  { id: '006', name: 'ING', country: 'Poland', state: 'Warsaw', status: 'Deactivated' },
  { id: '007', name: 'Rouje', country: 'France', state: 'Paris', status: 'Active' },
  { id: '008', name: 'Santa Lupita', country: 'Mexico', state: 'Mexico City', status: 'Pending' },
];

// Borrowed these from the material-ui documentation.
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const Template = (args: TableProps) => (
  <TableContainer>
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableColumn>No.</TableColumn>
          <TableColumn>Company name</TableColumn>
          <TableColumn>Country</TableColumn>
          <TableColumn>State</TableColumn>
          <TableColumn>Status</TableColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>001</TableCell>
          <TableCell>Starbucks</TableCell>
          <TableCell>United States</TableCell>
          <TableCell>Washington</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>002</TableCell>
          <TableCell>Nike</TableCell>
          <TableCell>Canada</TableCell>
          <TableCell>Ottawa</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>003</TableCell>
          <TableCell>09</TableCell>
          <TableCell>The Netherlands</TableCell>
          <TableCell>Eindhoven</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>004</TableCell>
          <TableCell>02</TableCell>
          <TableCell>United Kingdom</TableCell>
          <TableCell>London</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>005</TableCell>
          <TableCell>Paystack</TableCell>
          <TableCell>Kenya</TableCell>
          <TableCell>Nairobi</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>006</TableCell>
          <TableCell>ING</TableCell>
          <TableCell>Poland</TableCell>
          <TableCell>Warsaw</TableCell>
          <TableCell>Deactivated</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

export const Default = Template.bind({});

export const DataTable = (args: TableProps) => {
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
  const [sortedColumn, setSortedColumn] = React.useState('name');
  const [page, setPage] = React.useState(1);

  const rowsPerPage = 5;

  const handleSort = (column: string) => {
    const isAsc = sortedColumn === column && sortDirection === 'asc';

    setSortDirection(isAsc ? 'desc' : 'asc');
    setSortedColumn(column);
  };

  return (
    <TableContainer>
      <Box sx={{ height: 342 }}>
        <Table {...args}>
          <TableHeader>
            <TableRow>
              <TableColumn>No.</TableColumn>
              <TableColumn
                isActive={sortedColumn === 'name'}
                isSortable
                onClick={() => handleSort('name')}
                sortDirection={sortDirection}
              >
                Company name
              </TableColumn>
              <TableColumn>Country</TableColumn>
              <TableColumn>State</TableColumn>
              <TableColumn
                isActive={sortedColumn === 'status'}
                isSortable
                onClick={() => handleSort('status')}
                sortDirection={sortDirection}
              >
                Status
              </TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows
              .sort(getComparator(sortDirection, sortedColumn))
              .slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.country}</TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        onChange={setPage}
        page={page}
        rowsPerPage={rowsPerPage}
        totalRowCount={rows.length}
      />
    </TableContainer>
  );
};
