function managerEntries(entry, options) {
  return [...entry, require.resolve('./register')];
}

function config(entry) {
  return [...entry, require.resolve('./enhancers')];
}

module.exports = { config, managerEntries };
