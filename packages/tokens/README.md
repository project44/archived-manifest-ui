# @manifest-ui/tokens

Design tokens for manifest-ui projects

## Installation

```sh
yarn add @manifest-ui/tokens
```

## Usage

Use the `getToken` function to return the token value.

```ts
import { getToken } from '@manifest-ui/tokens';

const backgroundColor = getToken('color-background-primary');
```

### Raw Values

You can also access the raw token value, however, this is not recommended as these are subject to
change.

```ts
import { COLOR_BACKGROUND_PRIMARY } from '@manifest-ui/tokens';
```
