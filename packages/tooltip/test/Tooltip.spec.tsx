import * as React from 'react';
import { fireEvent, render, screen, testA11y, userEvent, waitFor } from '../../../test/utils';
import { Tooltip, TooltipProps } from '../src';

function ControlledTooltip() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Tooltip isOpen={isOpen} onChange={setIsOpen} title="Hello World">
      <button>Open Tooltip</button>
    </Tooltip>
  );
}

describe('@manifest-ui/tooltip', () => {
  it('should pass accessibility', async () => {
    await testA11y(
      <Tooltip isOpen>
        <button>Open Tooltip</button>
      </Tooltip>,
    );
  });

  it('should render', async () => {
    render(
      <Tooltip>
        <button>Open Tooltip</button>
      </Tooltip>,
    );

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    userEvent.hover(screen.getByText('Open Tooltip'));

    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());

    userEvent.unhover(screen.getByText('Open Tooltip'));

    await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());

    userEvent.hover(screen.getByText('Open Tooltip'));

    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());

    fireEvent.keyDown(screen.getByRole('tooltip'), { key: 'Escape' });

    await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
  });

  it('should support controlled state', async () => {
    render(<ControlledTooltip />);

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    userEvent.hover(screen.getByText('Open Tooltip'));

    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());

    userEvent.unhover(screen.getByText('Open Tooltip'));

    await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
  });
});
