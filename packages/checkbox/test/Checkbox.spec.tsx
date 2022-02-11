import * as React from 'react';
import { act, render, screen, userEvent } from '../../../test/utils';
import { Checkbox } from '../src';

describe('@manifest-ui/checkbox', () => {
  it('should render a checkbox and checking events', () => {
    render(<Checkbox>Checkbox</Checkbox>);

    const input = screen.getByRole('checkbox');

    expect(input).not.toBeChecked();

    // Input interactions
    act(() => {
      userEvent.click(input);
    });

    expect(input).toBeChecked();

    act(() => {
      userEvent.click(input);
    });

    expect(input).not.toBeChecked();

    act(() => {
      userEvent.keyboard('{space}');
    });

    expect(input).toBeChecked();

    act(() => {
      userEvent.keyboard('{space}');
    });

    expect(input).not.toBeChecked();
  });

  it('should support controlled states', () => {
    const changeSpy = jest.fn();

    render(
      <Checkbox isChecked onChange={changeSpy}>
        Checkbox
      </Checkbox>,
    );

    const input = screen.getByRole('checkbox');

    act(() => {
      userEvent.click(input);
    });

    expect(changeSpy).toHaveBeenCalled();
  });

  it('should support readonly', () => {
    const onChange = jest.fn();

    render(
      <Checkbox isReadOnly isChecked onChange={onChange}>
        Checkbox
      </Checkbox>,
    );

    const input = screen.getByRole('checkbox');

    act(() => {
      userEvent.click(input);
    });

    expect(onChange).not.toHaveBeenCalled();
  });
});
