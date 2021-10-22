import React from 'react';
import { Checkbox } from '@manifest-ui/react';

import Example from '../components/Example';

const CheckboxDocs = () => (
  <>
    <h3>Checkbox</h3>
    <p>
      Basic usage of <code>Checkbox</code>. Also a disable checkbox example.
    </p>
    <Example>
      <Checkbox defaultIsChecked>Checkbox</Checkbox>
      <Checkbox isDisabled>Checkbox</Checkbox>
      <Checkbox isDisabled defaultIsChecked>
        Checkbox
      </Checkbox>
    </Example>

    <h3>Checkbox with custom color</h3>
    <p>
      You can override the color scheme of the <code>Checkbox</code> to any
      color key specified in <code>theme.colors</code>.
    </p>
    <Example>
      <Checkbox colorScheme="red" defaultIsChecked>
        Checkbox
      </Checkbox>
      <Checkbox colorScheme="green" defaultIsChecked>
        Checkbox
      </Checkbox>
    </Example>

    <h3>Checkbox sizes</h3>
    <p>
      Pass the size prop to change the size of the Checkbox. Values can be
      either sm, md or lg.
    </p>
    <Example>
      <Checkbox size="sm" colorScheme="red">
        Checkbox
      </Checkbox>
      <Checkbox size="md" colorScheme="green" defaultIsChecked>
        Checkbox
      </Checkbox>
      <Checkbox size="lg" colorScheme="orange" defaultIsChecked>
        Checkbox
      </Checkbox>
    </Example>

    <h3>Invalid Checkbox</h3>
    <p>Mark a Checkbox as invalid.</p>
    <Example>
      <Checkbox isInvalid>Checkbox</Checkbox>
    </Example>
  </>
);

export default CheckboxDocs;
