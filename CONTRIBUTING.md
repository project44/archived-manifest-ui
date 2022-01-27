# Contribution guidelines

Thanks for showing interest to contribute to Manifest UI 💖, you rock!

There are different ways you can contribute, all
of which are valuable. Here's a few guidelines that should help you as you
prepare your contribution.

## Setup the Project

The following steps will get you up and running to contribute to Manifest UI:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/project44/manifest-ui))

2. Clone your fork locally

```sh
git clone https://github.com/<your_github_username>/manifest-ui.git
cd manifest-ui
```

3. Setup all the dependencies and packages by running `yarn && yarn build`. This
   command will install dependencies

> If you run into any issues during this step, kindly reach out to the Design System team [here](https://p-44.slack.com/archives/C02CL3RLKED).

## Development

_coming soon_ ✨

### Tooling

- [Preconstruct](https://preconstruct.tools/) to dev and build code in the monorepo.
- [Playroom](https://github.com/seek-oss/playroom/) for rapid UI prototyping.
- [Storybook](https://storybook.js.org/) for building, documenting, and testing components.
- [Changeset](https://github.com/atlassian/changesets) for changes
  documentation, changelog generation, and release management.

### Commands

**`yarn dev`**: starts Storybook for building and testing components.

**`yarn build`**: run build for all component packages.

**`yarn lint`**: runs all the safety checks (manypkg, eslint, prettier, and tsc).

## Think you found a bug?

Please conform to the issue template and provide a clear path to reproduction
with a code example. The best way to show a bug is by sending a CodeSandbox
link.

You may wish to use our starters to help you get going:

- JavaScript Starter: <https://codesandbox.io/s/manifest-ui-javascript-1i78l>
- TypeScript Starter: <https://codesandbox.io/s/manifest-ui-typescript-u5hcs>

## Proposing new or changed API?

Please provide thoughtful comments and some sample API code. Proposals that
don't line up with our roadmap or don't have a thoughtful explanation will be
closed.

## Making a Pull Request?

Pull requests need only the :+1: of two or more collaborators to be merged; when
the PR author is a collaborator, that counts as one.

### Steps to PR

1. Fork of the manifest-ui repository and clone your fork

2. Create a new branch out of the `main` branch. We follow the convention
   `[type/scope]`. For example `fix/accordion-hook` or `docs/menu-typo`. `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.

3. Make and commit your changes.
   As you develop, you can run `yarn build` and
   `yarn storybook` to make sure everything works as expected.

4. Run `yarn changeset` to create a detailed description of your changes. This
   will be used to generate a changelog when we publish an update.
   [Learn more about Changeset](https://github.com/atlassian/changesets/tree/master/packages/cli).

> If you made minor changes like CI config, prettier, etc, you can run
> `yarn changeset add --empty` to generate an empty changeset file to document
> your changes.

## License

By contributing your code to the manifest-ui GitHub repository, you agree to
license your contribution under the MIT license.
