import { Box, Button, ChakraProvider } from '@chakra-ui/react';

export default function Root(props) {
  return (
    <ChakraProvider>
      <Box as="section" m="14">
        {props.name} is
        <Button>Mounted</Button>
      </Box>
    </ChakraProvider>
  );
}
