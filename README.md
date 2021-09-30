<p align="center">
  <!-- image here -->
</p>

<h1 align="center">Manifest UI</h1>

<p align="center">Design System tokens and components for <a href="https://www.project44.com/" >project44</a>.</p>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/@manifest-ui/react">
    <img alt="" src="https://img.shields.io/npm/v/@manifest-ui/react.svg">
  </a>
  <a aria-label="contributors graph" href="https://github.com/project44/manifest-ui/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/project44/manifest-ui.svg">
  </a>
  <a aria-label="last commit" href="https://github.com/project44/manifest-ui/commits/main">
    <img alt="" src=
  "https://img.shields.io/github/last-commit/project44/manifest-ui.svg">
  </a>
  <a aria-label="license" href="https://github.com/project44/manifest-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/project44/manifest-ui.svg" alt="">
  </a>
</p>

Themeable design system for the project44.

## Documentation

Our documentation site lives at [zeroheight](https://zeroheight.com/27d9b4710). You'll be able to find detailed documentation on getting started, all of the components, our theme, our principles, and more.

## Installation

Install `@manifest-ui/themes` and necessary peer dependencies in your project with your package manager of choice:

```
npm install @manifest-ui/themes @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4

// or

yarn add @manifest-ui/themes @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

## Usage

To start using the theme and components, please follow these steps:

Wrap your application with the `ChakraProvider` provided by **@chakra-ui/react**. Then apply a theme from **@manifest-ui/themes**.

```jsx
import { ChakraProvider } from '@chakra-ui/react';
import wireframeTheme from '@manifest-ui/themes/wireframe';

// Do this at the root of your application
function App({ children }) {
  return <ChakraProvider theme={wireframeTheme}>{children}</ChakraProvider>;
}
```

Optionally, you can wrap your application with the `ColorModeProvider` so you can toggle between light and dark mode within your app.

Now you can start using components like so!:

```jsx
import { Button } from '@chakra-ui/react';

function Example() {
  return <Button>Track shipment</Button>;
}
```

## Contributing

We love collaborating with folks inside and outside of project44 and welcome contributions!

> 👉 See the [contributing docs](https://github.com/project44/manifest-ui/blob/main/CONTRIBUTING.md) for more info on code style, testing, coverage, and troubleshooting
