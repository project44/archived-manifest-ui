import * as React from 'react';
import { useControlled } from './useControlled';

type PageType = number | 'dots' | 'next' | 'previous';

export interface UsePaginationOptions {
  /**
   * The outer visible boundaries of the pagination list.
   *
   * @default 1
   */
  boundaries?: number;
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
   * The number of pages to display before and after the current selected page.
   *
   * @default 1
   */
  siblings?: number;
  /**
   * The total number of rows in the table.
   */
  totalRowCount?: number;
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
  const {
    boundaries = 1,
    defaultPage = 1,
    onChange,
    page,
    rowsPerPage = 10,
    siblings = 1,
    totalRowCount = 1,
  } = params;

  const pageCount = Math.ceil(totalRowCount / rowsPerPage);

  const [activePage, setActivePage] = useControlled({
    defaultValue: defaultPage,
    onChange,
    value: page,
  });

  const next = () => setActivePage(Number(activePage) + 1);
  const previous = () => setActivePage(Number(activePage) - 1);
  const setPage = (pageNumber: number) => setActivePage(pageNumber);

  const pages = React.useMemo((): PageType[] => {
    const startRange = range(1, Math.min(boundaries, pageCount));
    const endRange = range(Math.max(pageCount - boundaries + 1, boundaries + 1), pageCount);

    const startIndex = Math.max(
      Math.min(Number(activePage) - siblings, pageCount - boundaries - siblings * 2 - 1),
      boundaries + 2,
    );
    const endIndex = Math.min(
      Math.max(Number(activePage) + siblings, boundaries + siblings * 2 + 2),
      endRange.length > 0 ? endRange[0] - 2 : pageCount - 1,
    );

    // Show siblings or dots
    let siblingsEndRange: PageType[] =
      pageCount - boundaries > boundaries ? [pageCount - boundaries] : [];
    let siblingsStartRange: PageType[] =
      boundaries + 1 < pageCount - boundaries ? [boundaries + 1] : [];

    if (endIndex < pageCount - boundaries - 1) {
      siblingsEndRange = ['dots'];
    }

    if (startIndex > boundaries + 2) {
      siblingsStartRange = ['dots'];
    }

    return [
      ...startRange,
      ...siblingsStartRange,
      ...range(startIndex, endIndex),
      ...siblingsEndRange,
      ...endRange,
    ];
  }, [activePage, boundaries, pageCount, siblings]);

  return { next, page: activePage, pageCount, pages, previous, setPage };
}
