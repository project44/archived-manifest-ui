import React from 'react';
import { Flex, FlexProps, useColorModeValue } from '@manifest-ui/react';

const Card = (props: FlexProps) => {
  return (
    <Flex
      bg={useColorModeValue('white', 'gray.700')}
      borderColor={useColorModeValue('gray.300', 'whiteAlpha.200')}
      borderRadius="base"
      borderWidth="thin"
      direction="column"
      shadow="md"
      w="full"
      {...props}
    />
  );
};

export default Card;
