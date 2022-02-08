import { act, renderHook } from '../../../test/utils';
import { usePagination } from '../src';

describe('@manifest-ui/hooks - usePagination', () => {
  it('should be defined', () => {
    expect(usePagination).toBeDefined();
  });

  it('should return the correct number of pages', () => {
    let currentPage = 1;
    let totalRowCount = 10;

    const { result, rerender } = renderHook(() =>
      usePagination({ page: currentPage, totalRowCount }),
    );

    let { pages } = result.current;

    // Should display 1 page number and next and previous
    expect(pages).toHaveLength(1);

    totalRowCount = 80;

    rerender();

    ({ pages } = result.current);

    // Display end dots
    expect(pages).toHaveLength(7);
    expect(pages.filter(item => item === 'dots')).toHaveLength(1);

    currentPage = 5;
    totalRowCount = 80;

    rerender();

    ({ pages } = result.current);

    // Display start dots
    expect(pages).toHaveLength(7);
    expect(pages.filter(item => item === 'dots')).toHaveLength(1);

    currentPage = 5;
    totalRowCount = 90;

    rerender();

    ({ pages } = result.current);

    // Display both dots
    expect(pages).toHaveLength(7);
    expect(pages.filter(item => item === 'dots')).toHaveLength(2);
  });

  it('should handle setting the correct page', () => {
    const { result } = renderHook(() => usePagination({ totalRowCount: 100 }));

    let { next, page, previous, setPage } = result.current;

    act(() => {
      setPage(5);
    });

    ({ next, page, previous, setPage } = result.current);

    expect(page).toEqual(5);

    act(() => {
      next();
    });

    ({ next, page, previous, setPage } = result.current);

    expect(page).toEqual(6);

    act(() => {
      previous();
    });

    ({ page, setPage } = result.current);

    expect(page).toEqual(5);
  });
});
