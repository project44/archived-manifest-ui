import * as React from 'react';
import { fireEvent, render, screen, testA11y } from '../../../test/utils';
import { Pagination, PaginationProps } from '../src';

describe('@manifest-ui/pagination', () => {
  it('should pass accessibility', async () => {
    await testA11y(<Pagination totalRowCount={100} />);
  });

  it('should render and support pagination event', () => {
    render(<Pagination totalRowCount={100} />);

    expect(screen.getAllByRole('button')[1]).toHaveAttribute('aria-current', 'true');

    // Displays ellipsis
    expect(screen.getAllByText('...')).toHaveLength(1);

    fireEvent.click(screen.getAllByRole('button')[5]);

    expect(screen.getAllByText('...')).toHaveLength(2);

    fireEvent.click(screen.getAllByRole('button')[1]);

    // Handles next click
    fireEvent.click(screen.getByLabelText('go to next page'));

    expect(screen.getAllByRole('button')[2]).toHaveAttribute('aria-current', 'true');

    // Handles next click
    fireEvent.click(screen.getByLabelText('go to previous page'));

    expect(screen.getAllByRole('button')[1]).toHaveAttribute('aria-current', 'true');
  });

  it('should render without page numbers', () => {
    render(<Pagination totalRowCount={100} showPageNumbers={false} />);

    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it.each(['filled', 'outlined', 'text'])('should render %s variant', variant => {
    render(<Pagination totalRowCount={100} variant={variant as PaginationProps['variant']} />);
  });
});
