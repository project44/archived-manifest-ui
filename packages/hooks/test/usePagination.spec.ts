import { act, renderHook } from '../../../test/utils';
import { usePagination } from '../src';

describe('@manifest-ui/hooks - usePagination', () => {
  it('should be defined', () => {
    expect(usePagination).toBeDefined();
  });

  it('should support pagination', () => {
    let page = 1;
    let totalRowCount = 10;

    const { result, rerender } = renderHook(() => usePagination({ page, totalRowCount }));

    let { pages } = result.current;

    // Disables previous and next pages if page count equals 1.
    expect(pages).toHaveLength(3);
    expect(pages[0]).toHaveProperty('type', 'previous');
    expect(pages[0]).toHaveProperty('isDisabled', true);
    expect(pages[2]).toHaveProperty('type', 'next');
    expect(pages[2]).toHaveProperty('isDisabled', true);

    totalRowCount = 20;

    rerender();

    ({ pages } = result.current);

    // Enables next button if page count is greater than 1
    expect(pages[0]).toHaveProperty('type', 'previous');
    expect(pages[0]).toHaveProperty('isDisabled', true);
    expect(pages[3]).toHaveProperty('type', 'next');
    expect(pages[3]).toHaveProperty('isDisabled', false);

    page = 2;

    rerender();

    ({ pages } = result.current);

    // Enables previous and disables next button if page equals total page count.
    expect(pages[0]).toHaveProperty('type', 'previous');
    expect(pages[0]).toHaveProperty('isDisabled', false);
    expect(pages[3]).toHaveProperty('type', 'next');
    expect(pages[3]).toHaveProperty('isDisabled', true);

    page = 1;
    totalRowCount = 80;

    rerender();

    ({ pages } = result.current);

    // Display end dots
    expect(pages).toHaveLength(9);
    expect(pages[2]).toHaveProperty('children', 2);
    expect(pages[6]).toHaveProperty('type', 'dots');

    page = 5;
    totalRowCount = 80;

    rerender();

    ({ pages } = result.current);

    // Display start dots
    expect(pages[2]).toHaveProperty('type', 'dots');
    expect(pages[6]).toHaveProperty('children', 7);

    page = 5;
    totalRowCount = 90;

    rerender();

    ({ pages } = result.current);

    // Display both dots
    expect(pages[2]).toHaveProperty('type', 'dots');
    expect(pages[6]).toHaveProperty('type', 'dots');
  });
});
