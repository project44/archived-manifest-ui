import * as React from 'react';
import { fireEvent, render, screen, waitFor } from '../../../test/utils';
import { DateRangePicker } from '../src';

describe('@manifest-ui/date-range', () => {
  it('should render with default values', async () => {
    render(
      <DateRangePicker
        defaultValue={{ endDate: new Date('2018'), startDate: new Date('2018') }}
        placeholder="Select Date..."
      />,
    );

    await waitFor(() => {
      expect(screen.getByText('1/1/2018 - 1/1/2018')).toBeDefined();
    });
  });

  it('should handle change', async () => {
    const changeSpy = jest.fn();

    render(<DateRangePicker onChange={changeSpy} placeholder="Select Date..." />);

    fireEvent.click(screen.getByText('Select Date...'));

    await waitFor(() => {
      fireEvent.click(screen.getByText('This Week'));
    });

    expect(changeSpy).toHaveBeenCalled();
  });

  it('should handle disabled', async () => {
    const changeSpy = jest.fn();

    render(<DateRangePicker isDisabled onChange={changeSpy} placeholder="Select Date..." />);

    fireEvent.click(screen.getByText('Select Date...'));

    await waitFor(() => {
      expect(screen.queryByText('This Week')).toBeNull();
    });
  });
});
