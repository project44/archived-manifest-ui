import * as React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@manifest-ui/icons';
import {
  StyledPagination,
  StyledPaginationButton,
  StyledPaginationEllipsis,
  StyledPaginationText,
} from './Pagination.styles';
import { usePagination, UsePaginationOptions } from '@manifest-ui/hooks';
import { ComponentProps } from '@manifest-ui/styled';

export interface PaginationProps
  extends Omit<ComponentProps<typeof StyledPagination>, 'onChange'>,
    UsePaginationOptions {}

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
      <StyledPagination className="manifestui-pagination" ref={ref} {...other}>
        <StyledPaginationButton
          aria-label="go to previous page"
          className="manifestui-pagination-button"
          disabled={page === 1}
          onClick={previous}
        >
          <KeyboardArrowLeft />
          <StyledPaginationText className="manifestui-pagination-text" data-placement="end">
            Previous
          </StyledPaginationText>
        </StyledPaginationButton>

        {pages.map((item, index) => (
          <React.Fragment key={`${item}_${index}`}>
            {item === 'dots' && (
              <StyledPaginationEllipsis className="manifestui-pagination-ellipsis">
                ...
              </StyledPaginationEllipsis>
            )}
            {item !== 'dots' && (
              <StyledPaginationButton
                aria-current={item === page ? 'true' : undefined}
                aria-label={`${item === page ? '' : 'go to '}page ${String(item)}`}
                className="manifestui-pagination-button"
                data-active={item === page ? '' : undefined}
                onClick={() => {
                  setPage(item as number);
                }}
              >
                {item.toString()}
              </StyledPaginationButton>
            )}
          </React.Fragment>
        ))}

        <StyledPaginationButton
          aria-label="go to next page"
          className="manifestui-pagination-button"
          disabled={page === pageCount}
          onClick={next}
        >
          <StyledPaginationText className="manifestui-pagination-text" data-placement="start">
            Next
          </StyledPaginationText>
          <KeyboardArrowRight />
        </StyledPaginationButton>
      </StyledPagination>
    );
  },
);

Pagination.displayName = 'Pagination';
