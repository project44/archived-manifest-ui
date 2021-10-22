import React from 'react';
import { Grid, GridItem, useColorModeValue } from '@manifest-ui/react';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Layout: React.FC = ({ children }) => {
  return (
    <Grid templateRows="auto 1fr" templateColumns="auto 1fr" h="full">
      <GridItem
        as="header"
        bg={useColorModeValue('purple.900', 'purple.900')}
        color={useColorModeValue('white', 'white')}
        colSpan={2}
      >
        <Navbar />
      </GridItem>

      <GridItem
        as="main"
        bg={useColorModeValue('gray.100', 'gray.800')}
        gridColumn="2 / 3"
        gridRow="2 / 3"
        h="full"
      >
        {children}
      </GridItem>

      <GridItem
        bg={useColorModeValue('white', 'gray.800')}
        gridColumn="1 / 2"
        gridRow="2 / 3"
        h="full"
        shadow={useColorModeValue('base', 'dark-lg')}
      >
        <Sidebar />
      </GridItem>
    </Grid>
  );
};

export default Layout;
