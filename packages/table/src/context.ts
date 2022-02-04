import * as React from 'react';

export interface TableCellContext {
  variant?: 'body' | 'footer' | 'header';
}

export const TableContext = React.createContext<TableCellContext>({});

export const useTableContext = () => React.useContext(TableContext);
