# @manifest-ui/themes

**@manifest-ui/themes** is a collection of Chakra UI themes for [project44](https://stitches.dev).

<p><br /></p>

```sh
# with npm
npm install @manifest-ui/themes

# with yarn
yarn add @manifest-ui/themes
```

You must also have Chakra UI and all peer dependencies installed for your project as well. See the [installation instructions](https://chakra-ui.com/docs/getting-started#installation) of the Chakra UI docs.

<p><br /></p>

<a href="https://codesandbox.io/s/manifest-ui-e8z8c"><img src="https://img.shields.io/badge/-Edit_in_Sandbox-2b354f?logo=codesandbox&style=flat-square" alt="open in codesandbox" valign="middle" align="right"></a>

<br />

```jsx
import { Box, ChakraProvider } from '@chakra-ui/react';
import wireframeTheme from '@manifest-ui/themes/wireframe';

export default function App() {
  return (
    <ChakraProvider theme={wireframeTheme}>
      <Box p={8} bg="blue.100">
        <h1>Hello Manifest UI</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Box>
    </ChakraProvider>
  );
}
```

<p><br /></p>

## Documentation

For full documentation, visit [zeroheight](https://zeroheight.com/27d9b4710).

## Contributing

Please follow our [contributing guidelines](./CONTRIBUTING.md).

## Authors

- Sam Rose ([@samrose3](https://twitter.com/_samrose3_)) - [project44](https://project44.com)
- _Could be you!_ DM me on Twitter if you are interested in joining our team 🎉

## License

Licensed under the MIT License, Copyright © 2021-present project44.

See [LICENSE](./LICENSE.md) for more information.
