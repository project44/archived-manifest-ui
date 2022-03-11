import * as React from 'react';
import { render, screen } from '../../../test/utils';
import { FocusTrap } from '../src';

describe('@manifest-ui/focus-trap', () => {
  it('should render', () => {
    render(
      <FocusTrap>
        <button type="button">button 1</button>
        <button type="button">button 2</button>
        <button type="button">button 3</button>
      </FocusTrap>,
    );

    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toHaveFocus();
  });
});
