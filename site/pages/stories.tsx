import React from 'react';
import {
  Container,
  BoxProps,
  Flex,
  useColorModeValue,
} from '@manifest-ui/react';
import { Meta, Story } from '@storybook/react';
import startCase from 'lodash/startCase';

import ToggleColorMode from '../components/ToggleColorMode';
import Example from '../components/Example';

const req = require.context('../../packages', true, /\.stories\.tsx?$/);
const allStories: ([] | [string, [string, Story][]])[] = req
  .keys()
  .map((filename) => {
    const matches = filename.match(/([a-zA-Z]+)\.stories\.tsx?$/);
    if (!matches) {
      return [];
    }
    const { default: meta, ...rest } = req(filename);
    const category = (meta as Meta).title;
    const stories = Object.entries<Story>(rest);
    return [category, stories];
  });

const Stories = () => {
  return (
    <Frame>
      <h1>
        <Flex align="center" justify="space-between">
          Manifest UI
          <ToggleColorMode />
        </Flex>
      </h1>
      {allStories.map(([category, stories = []]) => (
        <>
          <h2>{category}</h2>
          {stories.map(([name, Story]) => (
            <>
              <h3>{startCase(name)}</h3>
              <Example>
                <Story />
              </Example>
            </>
          ))}
        </>
      ))}
    </Frame>
  );
};

const Frame = (props: BoxProps) => (
  <Container
    as="main"
    pb="4"
    sx={{
      h1: {
        mt: '8',
        mb: '1',
        fontSize: '3xl',
        fontWeight: 'bold',
        lineHeight: '1.2',
        letterSpacing: 'tight',
      },
      h2: {
        mt: '24',
        mb: '2',
        fontSize: '2xl',
        fontWeight: 'semibold',
        lineHeight: '1.3',
        letterSpacing: 'tight',
      },
      h3: {
        mt: '12',
        mb: '2',
        fontSize: 'xl',
        fontWeight: 'semibold',
        lineHeight: 'shorter',
        letterSpacing: 'tight',
      },
      p: {
        mt: '5',
        lineHeight: '1.7',
      },
      code: {
        borderRadius: 'sm',
        paddingInlineStart: '1',
        paddingInlineEnd: '1',
        fontSize: 'sm',
        paddingTop: '2px',
        paddingBottom: '2px',
        whiteSpace: 'nowrap',
        lineHeight: 'normal',
        color: useColorModeValue('purple.500', 'purple.200'),
      },
    }}
    {...props}
  />
);

export default Stories;
