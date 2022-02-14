import * as React from 'react';
import { act, render, screen, userEvent } from '../../../test/utils';
import { Toggle } from '../src';

describe('@manifest-ui/Toggle', () => {
  it('should render a Toggle and checking events', () => {
    render(<Toggle>Toggle</Toggle>);

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
      <Toggle isChecked onChange={changeSpy}>
        Toggle
      </Toggle>,
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
      <Toggle isReadOnly isChecked onChange={onChange}>
        Toggle
      </Toggle>,
    );

    const input = screen.getByRole('checkbox');

    act(() => {
      userEvent.click(input);
    });

    expect(onChange).not.toHaveBeenCalled();
  });
});
