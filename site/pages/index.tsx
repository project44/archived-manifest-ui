import React from 'react';
import { Container, BoxProps, Flex } from '@manifest-ui/react';
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
        <div key={category}>
          <h2>{category}</h2>
          {stories.map(([name, Story]) => (
            <div key={name}>
              <h3>{startCase(name)}</h3>
              <Example>
                <Story {...Story.args} />
              </Example>
            </div>
          ))}
        </div>
      ))}
    </Frame>
  );
};

const Frame = (props: BoxProps) => <Container as="main" pb="4" {...props} />;

export default Stories;
