import * as React from 'react';
import { useControlled } from './useControlled';

type PageType = number | 'dots' | 'first' | 'last' | 'next' | 'previous';

export interface UsePaginationOptions {
  /**
   * The default page number (uncontrolled).
   *
   * @default 1
   */
  defaultPage?: number;
  /**
   * The current page (controlled).
   */
  page?: number;
  /**
   * The number of rows rendered per page.
   *
   * @default 10
   */
  rowsPerPage?: number;
  /**
   * The total number of rows in the table.
   */
  totalRowCount: number;
  /**
   * Callback executed on page change.
   */
  onChange?(page: number): void;
}

const range = (start: number, end: number) => {
  const length = end - start + 1;

  return Array.from({ length }, (_, i) => start + i);
};

/**
 * A custom hook for controlling a paginated state.
 */
export function usePagination(params: UsePaginationOptions) {
  const { defaultPage = 1, onChange, page, rowsPerPage = 10, totalRowCount } = params;

  const pageCount = Math.ceil(totalRowCount / rowsPerPage);
  const limitBoundary = 1;
  const pageBoundary = 1;

  const [activePage, setActivePage] = useControlled({
    defaultValue: defaultPage,
    onChange,
    value: page,
  });

  const startRange = range(1, Math.min(limitBoundary, pageCount));
  const endRange = range(Math.max(pageCount - limitBoundary + 1, limitBoundary + 1), pageCount);
  const siblingsStart = Math.max(
    Math.min(Number(page) - pageBoundary, pageCount - limitBoundary - pageBoundary * 2 - 1),
    limitBoundary + 2,
  );
  const siblingsEnd = Math.min(
    Math.max(
      Number(page) + Number(pageBoundary),
      Number(limitBoundary) + Number(pageBoundary) * 2 + 2,
    ),
    endRange.length > 0 ? endRange[0] - 2 : pageCount - 1,
  );
  const numberRange: PageType[] = range(siblingsStart, siblingsEnd);

  // Show siblings or dots
  let siblingsEndRange: PageType[] =
    pageCount - limitBoundary > limitBoundary ? [pageCount - limitBoundary] : [];
  let siblingsStartRange: PageType[] =
    limitBoundary + 1 < pageCount - limitBoundary ? [limitBoundary + 1] : [];

  if (siblingsEnd < pageCount - limitBoundary - 1) {
    siblingsEndRange = ['dots'];
  }

  if (siblingsStart > limitBoundary + 2) {
    siblingsStartRange = ['dots'];
  }

  const pages: PageType[] = [
    'previous',
    ...startRange,
    ...siblingsStartRange,
    ...numberRange,
    ...siblingsEndRange,
    ...endRange,
    'next',
  ];

  const handleClick = React.useCallback(
    (item: PageType) => {
      if (item === 'dots') return;

      let newPage = 0;

      if (typeof item === 'number') {
        newPage = item;
      }

      if (item === 'next') {
        newPage = Number(activePage) + 1;
      }

      if (item === 'previous') {
        newPage = Number(activePage) - 1;
      }

      setActivePage(newPage);
    },
    [activePage, setActivePage],
  );

  return { activePage, pages, onPageClick: handleClick };
}
