import React from 'react';
import type { NextPage } from 'next';
import { Box, Button } from '@manifest-ui/react';

const Home: NextPage = () => {
  return (
    <Box>
      <main>
        <h1>Welcome to Manifest UI</h1>
        <Button>Test</Button>
      </main>
    </Box>
  );
};

export default Home;
