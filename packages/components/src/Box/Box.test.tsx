import { render } from '@testing-library/react';
import { Box } from './Box';

test('renders with the Box class', () => {
  const { getByText } = render(<Box>Test box</Box>);

  expect(getByText('Test box')).toHaveClass('Box');
});
