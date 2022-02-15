import * as React from 'react';
import { act, fireEvent, render, screen, testA11y, userEvent } from '../../../test/utils';
import { Tag } from '../src';

describe('@manifest-ui/tag', () => {
  it('should pass accessibility', async () => {
    await testA11y(<Tag>Custom Tag</Tag>);
  });

  it('should pass accessibility when interactive', async () => {
    const dismissSpy = jest.fn();

    await testA11y(<Tag onDismiss={dismissSpy}>Custom Tag</Tag>);
  });

  it('should render with just text', () => {
    render(<Tag>Custom Tag</Tag>);

    expect(screen.getByText('Custom Tag')).toBeDefined();
  });

  it('should render with dismiss button', () => {
    const dismissSpy = jest.fn();
    const onKeyDownSpy = jest.fn();
    const onKeyUpSpy = jest.fn();

    render(
      <Tag
        dismissIconProps={{ 'aria-label': 'delete' }}
        isDismissible
        onDismiss={dismissSpy}
        onKeyDown={onKeyDownSpy}
        onKeyUp={onKeyUpSpy}
      >
        Custom Tag
      </Tag>,
    );

    const tag = screen.getByRole('button');

    act(() => {
      tag.focus();
    });

    expect(screen.getByRole('button')).toHaveProperty('tabIndex', 0);

    fireEvent.click(screen.getByLabelText('delete'));

    expect(dismissSpy).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(tag, { key: 'Delete' });

    expect(dismissSpy).toHaveBeenCalledTimes(1);

    fireEvent.keyUp(tag, { key: 'Delete' });

    expect(dismissSpy).toHaveBeenCalledTimes(2);

    fireEvent.keyDown(tag, { key: 'Backspace' });

    expect(dismissSpy).toHaveBeenCalledTimes(2);

    fireEvent.keyUp(tag, { key: 'Backspace' });

    expect(dismissSpy).toHaveBeenCalledTimes(3);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const onKeyDownSpy = jest.fn();
    const onKeyUpSpy = jest.fn();

    render(
      <Tag isClickable onClick={onClickSpy} onKeyDown={onKeyDownSpy} onKeyUp={onKeyUpSpy}>
        Custom Tag
      </Tag>,
    );

    const tag = screen.getByRole('button');

    expect(tag).toHaveProperty('tabIndex', 0);

    act(() => {
      tag.focus();
    });

    userEvent.keyboard('{x}');

    expect(onKeyDownSpy).toHaveBeenCalledTimes(1);
    expect(onKeyUpSpy).toHaveBeenCalledTimes(1);

    userEvent.keyboard('{escape}');

    expect(tag).not.toHaveFocus();

    act(() => {
      tag.focus();
    });

    expect(tag).toHaveFocus();

    userEvent.keyboard('{space}');

    expect(onClickSpy).toHaveBeenCalledTimes(1);

    userEvent.keyboard('{enter}');

    expect(onClickSpy).toHaveBeenCalledTimes(2);

    userEvent.click(tag);

    expect(onClickSpy).toHaveBeenCalledTimes(3);
  });

  it('should support is disabled', () => {
    const onClickSpy = jest.fn();
    const dismissSpy = jest.fn();

    render(
      <Tag isDisabled onClick={onClickSpy} onDismiss={dismissSpy}>
        Custom Tag
      </Tag>,
    );

    const tag = screen.getByText('Custom Tag').parentElement;

    expect(tag).toBeDefined();
    expect(tag).toHaveAttribute('data-disabled');
  });
});
