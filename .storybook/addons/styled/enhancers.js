import merge from 'lodash.merge';

/**
 * Format system props to provide a descritption in the props tables.
 *
 * Removing system props that do not have a description provided by the author of
 * the component.
 *
 * If we need to add more props to this, it may be worth creating a prop dictionary to make code
 * changes more minimal.
 */
const formatStyledProps = ({ argTypes }) => {
  return Object.keys(argTypes).reduce((acc, cur) => {
    const arg = argTypes[cur];

    if (!arg.name) return acc;

    if (arg.name === 'as') {
      return {
        ...acc,
        [cur]: merge({}, arg, {
          description: 'The element used for the component.',
          control: {
            type: 'text',
          },
        }),
      };
    }

    if (arg.name === 'sx') {
      return {
        ...acc,
        [cur]: merge({}, arg, {
          description: 'Style overrides using styled-system props or css.',
          control: {
            disable: true,
          },
        }),
      };
    }

    if (arg.name === 'size' || arg.name === 'variant') {
      if (!arg.description) return acc;
    }

    return {
      ...acc,
      [cur]: arg,
    };
  }, {});
};

export const argTypesEnhancers = [formatStyledProps];
