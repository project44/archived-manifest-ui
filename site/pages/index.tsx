import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Button } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Manifest UI</title>
        <meta
          name="description"
          content="Themeable design system for the project44"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Manifest UI</h1>
        <Button>Test</Button>
      </main>
    </Box>
  );
};

export default Home;
