import * as React from 'react';
import { ComponentProps, styled } from '@manifest-ui/styled';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@manifest-ui/icons';
import { usePagination, UsePaginationOptions } from '@manifest-ui/hooks';
import { Button } from '@manifest-ui/button';

export interface PaginationOptions extends UsePaginationOptions {
  /**
   * The pagination variant.
   *
   * @default 'text'
   */
  variant?: 'outlined' | 'text';
}

export type PaginationProps = ComponentProps<typeof StyledPagination>;

const StyledPagination = styled('div', {
  label: 'Pagination',
  themeKey: 'pagination',
})<PaginationOptions>({
  alignItems: 'center',
  boxSizing: 'border-box',
  columnGap: '8px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  rowGap: '8px',
});

const StyledEllipsis = styled('div', {
  label: 'Pagination',
  slot: 'ellipsis',
  themeKey: 'pagination',
})({
  fontFamily: 'body',
  fontSize: 'small',
  fontWeight: 'semibold',
  height: 'auto',
  letterSpacing: 'normal',
  lineHeight: 'large',
  px: 3,
  py: 2,
  textAlign: 'center',
});

const StyledNextText = styled('span')({ paddingEnd: 1 });

const StyledPreviousText = styled('span')({ paddingStart: 1 });

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (props: PaginationProps, ref) => {
    const {
      boundaries,
      defaultPage,
      onChange,
      page: pageProp,
      rowsPerPage,
      siblings,
      totalRowCount,
      variant = 'text',
      ...other
    } = props;

    const { next, page, pages, pageCount, previous, setPage } = usePagination({
      boundaries,
      defaultPage,
      onChange,
      page: pageProp,
      rowsPerPage,
      siblings,
      totalRowCount,
    });

    return (
      <StyledPagination ref={ref} {...other}>
        <Button
          aria-label="go to previous page"
          isDisabled={page === 1}
          onClick={previous}
          variant={variant}
        >
          <KeyboardArrowLeft />
          {variant === 'outlined' && <StyledPreviousText>Previous</StyledPreviousText>}
        </Button>

        {pages.map((item, index) => (
          <React.Fragment key={`${item}_${index}`}>
            {item === 'dots' && <StyledEllipsis>...</StyledEllipsis>}
            {item !== 'dots' && (
              <Button
                aria-current={item === page ? 'true' : undefined}
                aria-label={`${item === page ? '' : 'go to '}page ${String(item)}`}
                isActive={item === page}
                onClick={() => {
                  setPage(item as number);
                }}
                variant={variant}
              >
                {item.toString()}
              </Button>
            )}
          </React.Fragment>
        ))}

        <Button
          aria-label="go to next page"
          isDisabled={page === pageCount}
          onClick={next}
          variant={variant}
        >
          {variant === 'outlined' && <StyledNextText>Next</StyledNextText>}
          <KeyboardArrowRight />
        </Button>
      </StyledPagination>
    );
  },
);

Pagination.displayName = 'Pagination';
