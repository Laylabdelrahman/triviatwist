module.exports = function override(config, env) {
  // Disable the path polyfill
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: false,
  };
  return config;
};
