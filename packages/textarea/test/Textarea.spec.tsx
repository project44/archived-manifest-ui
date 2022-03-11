import * as React from 'react';
import { render, screen, testA11y, userEvent } from '../../../test/utils';
import { Textarea } from '../src';

describe('@manifest-ui/textarea', () => {
  it('should pass accessibility', async () => {
    await testA11y(<Textarea placeholder="Default" />);
  });

  it('should render and allow a user to input a value', () => {
    const onChangeSpy = jest.fn();

    render(<Textarea onChange={onChangeSpy} value="foo" />);

    const input = screen.getByDisplayValue('foo');

    expect(input).toBeVisible();

    // Check change
    const newValue = 'bar!';

    userEvent.type(input, newValue);

    expect(onChangeSpy).toHaveBeenCalledTimes(newValue.length);
  });

  it('should render disabled state and not allow input', () => {
    const onChangeSpy = jest.fn();

    render(<Textarea isDisabled onChange={onChangeSpy} value="foo" />);

    expect(screen.getByDisplayValue('foo')).toHaveAttribute('disabled');
  });
});
