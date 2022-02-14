import * as React from 'react';
import { act, render, screen, testA11y, userEvent } from '../../../test/utils';
import { Input } from '../src';
import { Person } from '@manifest-ui/icons';

describe('@manifest-ui/input', () => {
  it('should pass accessibility', async () => {
    await testA11y(<Input placeholder="Default" />);
  });

  it('should render and allow a user to input a value', () => {
    const onChangeSpy = jest.fn();

    const { container } = render(
      <Input endIcon={<Person />} onChange={onChangeSpy} value="foo" startIcon={<Person />} />,
    );

    const endIcon = container.querySelectorAll('svg')[1];
    const input = screen.getByDisplayValue('foo');
    const startIcon = container.querySelectorAll('svg')[0];

    // Check rendered values
    expect(endIcon).toBeTruthy();
    expect(input).toBeTruthy();
    expect(startIcon).toBeTruthy();

    // Check change
    const newValue = 'bar!';

    userEvent.type(input, newValue);

    expect(onChangeSpy).toHaveBeenCalledTimes(newValue.length);
  });

  it('should render disabled state and not allow input', () => {
    const onChangeSpy = jest.fn();

    render(
      <Input
        endIcon={<Person />}
        isDisabled
        onChange={onChangeSpy}
        value="foo"
        startIcon={<Person />}
      />,
    );

    const input = screen.getByDisplayValue('foo');

    expect(input).toHaveAttribute('disabled');
  });
});
