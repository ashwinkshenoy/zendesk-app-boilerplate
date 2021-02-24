const path = require('path');

module.exports = {
  publicPath: '',
  outputDir: 'dist/assets',
  chainWebpack: config => {
    config.plugin('copy').tap(args => {
      args[0].push(
        {
          from: path.resolve(__dirname, 'assets'),
          to: path.resolve(__dirname, 'dist/assets'),
          toType: 'dir',
          ignore: ['.DS_Store']
        },
        {
          from: path.resolve(__dirname, 'translations'),
          to: path.resolve(__dirname, 'dist/translations')
        }
      );
      return args;
    });
  }
};
