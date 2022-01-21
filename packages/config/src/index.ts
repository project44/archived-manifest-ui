import { DriverContext, Path, Tool } from '@beemo/core';

const EXTS = ['.ts', '.tsx', '.js', '.jsx'];

function hasNoParams(context: DriverContext, name: string): boolean {
  const { params } = context.args;

  return params.length === 0 || (params.length === 1 && params[0] === name);
}

export default function config(tool: Tool) {
  const workspacePrefixes = tool.project.getWorkspaceGlobs({ relative: true });

  // Babel
  tool.onRunDriver.listen(context => {
    context.addOption('--copy-files');

    if (!context.getRiskyOption('extensions')) {
      context.addOption('--extensions', EXTS.join(','));
    }

    if (hasNoParams(context, 'babel')) {
      context.addParam('src');
      context.addOption('--out-dir', context.getRiskyOption('esm') ? 'esm' : 'lib');
    }
  }, 'babel');

  // ESLint
  tool.onRunDriver.listen(context => {
    context.addOptions(['--color', '--fix']);

    if (!context.getRiskyOption('ext')) {
      context.addOption('--ext', EXTS.join(','));
    }

    if (hasNoParams(context, 'eslint')) {
      if (workspacePrefixes.length > 0) {
        workspacePrefixes.forEach(wsPrefix => {
          context.addParam(new Path(wsPrefix, 'src').path());
        });
      } else {
        context.addParams(['src']);
      }
    }

    context.addDriverDependency(tool.driverRegistry.get('prettier'));
    context.addDriverDependency(tool.driverRegistry.get('typescript'));
  }, 'eslint');

  // Jest
  tool.onRunDriver.listen((context, driver) => {
    context.addOptions(['--colors', '--logHeapUsage']);

    const env: Record<string, string> = {
      NODE_ENV: 'test',
      TZ: 'UTC',
    };

    if (context.argv.includes('--coverage')) {
      context.addOption('--detectOpenHandles');
    }

    // https://jestjs.io/docs/ecmascript-modules
    if (tool.config.settings.esm) {
      env.NODE_OPTIONS = `--experimental-vm-modules ${process.env.NODE_OPTIONS ?? ''}`.trim();
    }

    driver.configure({ env });

    context.addDriverDependency(tool.driverRegistry.get('babel'));
  }, 'jest');

  // Prettier
  tool.onRunDriver.listen(context => {
    if (hasNoParams(context, 'prettier')) {
      context.addOption('--write');
      context.addParam('.');
    }
  }, 'prettier');
}
