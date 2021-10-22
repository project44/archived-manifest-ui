import React from 'react';
import { Button, ButtonGroup, IconButton } from '@manifest-ui/react';

import { FaPlus, FaEnvelope, FaPhone } from 'react-icons/fa';

import Example from '../components/Example';

const ButtonDocs = () => (
  <>
    <h3>Button size</h3>
    <p>
      Use the size prop to change the size of the button. You can set the value
      to <code>xs</code>, <code>sm</code>, <code>md</code>, or <code>lg</code>.
    </p>
    <Example>
      <Button colorScheme="teal" size="xs">
        Button
      </Button>
      <Button colorScheme="teal" size="sm">
        Button
      </Button>
      <Button colorScheme="teal" size="md">
        Button
      </Button>
      <Button colorScheme="teal" size="lg">
        Button
      </Button>
    </Example>

    <h3>Button variant</h3>
    <p>
      Use the variant prop to change the visual style of the Button. You can set
      the value to <code>solid</code>, <code>ghost</code>, <code>outline</code>,
      or <code>link</code>.
    </p>
    <Example>
      <Button colorScheme="blue" variant="solid">
        Button
      </Button>
      <Button colorScheme="teal" variant="outline">
        Button
      </Button>
      <Button colorScheme="blue" variant="ghost">
        Button
      </Button>
      <Button colorScheme="teal" variant="link">
        Button
      </Button>
    </Example>

    <h3>Button with icon</h3>
    <p>
      You can add left and right icons to the Button component using the
      <code>leftIcon</code> and rightIcon props respectively.
    </p>
    <Example>
      <Button colorScheme="teal" leftIcon={<FaEnvelope />} variant="solid">
        Email
      </Button>
      <Button colorScheme="teal" rightIcon={<FaPhone />} variant="outline">
        Call us
      </Button>
    </Example>

    <h3>Button loading state</h3>
    <p>
      Pass the <code>isLoading</code> prop to show its loading state. By
      default, the button will show a spinner and leave the button's width
      unchanged.
    </p>
    <p>
      You can also pass the <code>loadingText</code> prop to show a spinner and
      the loading text.
    </p>
    <Example>
      <Button colorScheme="blue" isLoading variant="solid">
        Email
      </Button>
      <Button
        colorScheme="teal"
        isLoading
        loadingText="Submitting"
        variant="outline"
      >
        Submit
      </Button>
    </Example>

    <h3>Grouping Button</h3>
    <p>
      You can use the <code>Stack</code> or <code>ButtonGroup</code> component
      to group buttons.
    </p>
    <Example>
      <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme="blue">Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>
    </Example>

    <p>
      To flush the buttons, pass the <code>isAttached</code> prop.
    </p>
    <Example>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button mr="-px">Save</Button>
        <IconButton aria-label="Add to friends" icon={<FaPlus />} />
      </ButtonGroup>
    </Example>
  </>
);

export default ButtonDocs;
