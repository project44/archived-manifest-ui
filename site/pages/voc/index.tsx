import React from 'react';
import { Box, Container, Heading, Stack } from '@manifest-ui/react';

import Card from '../../components/Card';
import Navbar from '../../components/Navbar';

const VocHomePage = () => {
  return (
    <Box>
      <Navbar />
      <Container as="main" py="6">
        <Stack spacing="6">
          <Heading as="h1" size="xl">
            Good afternoon, Sam
          </Heading>
          <Card>hello KPIs</Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default VocHomePage;
