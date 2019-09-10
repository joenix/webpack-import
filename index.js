module.exports = (dir, context = /^\.\/\.js$/) => {
  return require.context(dir, true, context);
};
