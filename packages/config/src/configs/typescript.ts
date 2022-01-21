import type { TypeScriptConfig } from '@beemo/driver-typescript';

const { context, tool } = process.beemo;

// Do NOT set include, exclude, etc, since they cannot be overridden
// because of Beemo's array merging strategy. Requires consumers to set.

const config: TypeScriptConfig = {
  compilerOptions: {
    allowJs: true,
    allowSyntheticDefaultImports: true,
    declaration: false,
    esModuleInterop: true,
    experimentalDecorators: true,
    forceConsistentCasingInFileNames: true,
    lib: ['dom', 'esnext'],
    module: 'esnext',
    moduleResolution: 'node',
    noEmitOnError: true,
    noImplicitReturns: true,
    pretty: true,
    jsx: 'react-jsx',
    removeComments: true,
    resolveJsonModule: true,
    skipLibCheck: true,
    sourceMap: true,
    strict: true,
    target: 'es2021',
  },
};

const options = config.compilerOptions!;

// When using project references, we must merge the 2 configs instead of replacing,
// otherwise the `tsconfig.options.json` separation that Beemo automates... breaks.
if (tool.package.workspaces) {
  Object.assign(options, {
    composite: true,
    declaration: true,
    declarationMap: true,
    emitDeclarationOnly: true,
  });
}

if (context.getRiskyOption('sourceMaps')) {
  options.sourceMap = true;
}

export default config;
