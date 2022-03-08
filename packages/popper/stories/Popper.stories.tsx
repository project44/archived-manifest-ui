import * as React from 'react';
import { Popper, PopperAnchor, PopperContent, PopperProps } from '../src';
import { Box } from '@manifest-ui/layout';
import { Button } from '@manifest-ui/button';

export default {
  title: 'Components/Popper',
  component: Popper,
};

const Template = (args: PopperProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popper isOpen={isOpen} {...args}>
      <PopperAnchor>
        <Button onClick={() => setIsOpen(!isOpen)}>Toggle Popper</Button>
      </PopperAnchor>
      <PopperContent>
        <Box
          sx={{
            backgroundColor: 'white',
            borderColor: 'border',
            borderStyle: 'solid',
            borderWidth: 'medium',
            p: 5,
          }}
        >
          I am in a popper!
        </Box>
      </PopperContent>
    </Popper>
  );
};

export const Default = Template.bind({});
Default.args = {};
