<h1 align="center">Manifest UI</h1>

<p align="center">Design System themes and components for <a href="https://www.project44.com/">project44</a>.</p>

Themeable design system built using [Emotion] and [Radix] for project44.

## Documentation

Our documentation site lives at [p44design.systems]. You'll be able to find detailed documentation on getting started, all of the components, our theme, our principles, and more.

## Installation

Install `@manifest-ui/react` and necessary peer dependencies in your project with your package manager of choice:

```sh
# with npm
npm install @manifest-ui/react

# with yarn
yarn add @manifest-ui/react
```

All Manifest UI packages can be found on [NPM].

## Usage

To start using the theme and components, please follow these steps:

Wrap your application with the `Provider` provided by **@manifest-ui/react**.

```jsx
import { Provider } from '@manifest-ui/react';

// Do this at the root of your application
function App({ children }) {
  return <Provider>{children}</Provider>;
}
```

Now you can start using components like so:

```jsx
import { Button } from '@manifest-ui/react';

function Example() {
  return <Button>Track shipment</Button>;
}
```

## Contributing

We love collaborating with folks inside and outside of project44 and welcome contributions!

> 👉 See the [contributing docs] for more info on code style, testing, coverage, and troubleshooting

[p44design.systems]: https://p44design.systems
[emotion]: https://emotion.sh/docs/introduction
[radix]: https://www.radix-ui.com/
[contributing docs]: CONTRIBUTING.md
[NPM]: https://www.npmjs.com/search?q=%40manifest-ui
