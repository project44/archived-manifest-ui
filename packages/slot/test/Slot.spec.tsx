import * as React from 'react';
import { fireEvent, render, screen } from '../../../test/utils';
import { Slot } from '../src';

describe('@manifest-ui/pagination', () => {
  it('should render and forward props', () => {
    const callbackSpy = jest.fn();

    render(
      <Slot onClick={callbackSpy}>
        <button>click me</button>
      </Slot>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(callbackSpy).toHaveBeenCalledTimes(1);
  });

  it('should render and merge props', () => {
    const callbackSpy = jest.fn();
    const message1 = 'click1';
    const message2 = 'click2';

    render(
      <Slot
        onClick={() => {
          void callbackSpy(message1);
        }}
      >
        <button
          onClick={() => {
            void callbackSpy(message2);
          }}
        >
          click me
        </button>
      </Slot>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(callbackSpy).toHaveBeenNthCalledWith(1, message1);
    expect(callbackSpy).toHaveBeenNthCalledWith(2, message2);
  });

  it('should return null for invalid children', () => {
    render(<Slot>test</Slot>);

    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });

  it('should throw error for react nodes', () => {
    let errorMessage = '';

    try {
      render(
        <Slot>
          <button>click me</button>
          <p>test</p>
        </Slot>,
      );
    } catch (e) {
      errorMessage = e.message;
    }

    expect(errorMessage).toEqual(
      'React.Children.only expected to receive a single React element child.',
    );
  });
});
