import * as React from 'react';
import { render } from '../../../test/utils';
import { Select } from '../src';

/**
 * This is just a smoke screen test, react-select has all the testing covered.
 *
 * https://github.com/JedWatson/react-select/blob/master/packages/react-select/src/__tests__/Select.test.tsx
 */
describe('@manifest-ui/select', () => {
  it('should render without error', () => {
    render(
      <Select
        options={[
          { label: 'Running Late', value: 'late' },
          { label: 'Running Early', value: 'early' },
          { label: 'Estimated Time', value: 'estimated' },
          { label: 'Planned Time', value: 'planned' },
          { label: 'Actual Time', value: 'actual' },
          { label: 'Stop Name', value: 'stop' },
        ]}
        placeholder="Basic Select"
      />,
    );
  });
});
