import * as React from 'react';
import { act, render, screen, testA11y, userEvent } from '../../../test/utils';
import { Checkbox } from '../src';

describe('@manifest-ui/checkbox', () => {
  it('should pass accessibility without text', async () => {
    await testA11y(<Checkbox aria-label="Checkbox" />);
  });

  it('should pass accessibility with text', async () => {
    await testA11y(<Checkbox>Checkbox</Checkbox>);
  });

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

  it('should support indeterminate state', () => {
    const changeSpy = jest.fn();

    render(
      <Checkbox isIndeterminate onChange={changeSpy}>
        Checkbox
      </Checkbox>,
    );

    const input = screen.getByRole('checkbox');

    expect(input).toHaveAttribute('aria-checked', 'mixed');

    act(() => {
      userEvent.click(input);
    });

    expect(changeSpy).toHaveBeenCalled();
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
