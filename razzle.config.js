const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  modify: (config, { dev, target }) => {
    /**
     * Example customization by pushing BundleAnalyzerPlugin to the plugins array
     * Take into consideration that the package is not installed on purpose
     */
    if (target === 'web' && process.env.BUNDLE_ANALYZE) {
      config.plugins = [
        ...config.plugins,
        new BundleAnalyzerPlugin(),
      ];
    }

    return config;
  },
};
