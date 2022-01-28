import { Canvas, Story as StorybookStory } from '@storybook/addon-docs';

const Story = (props) => (
  <Canvas>
    <StorybookStory {...props} />
  </Canvas>
);

export default Story;