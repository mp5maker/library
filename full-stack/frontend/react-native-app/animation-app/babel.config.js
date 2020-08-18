const path = require('path')

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver', {
          extensions: [
            '.js',
            '.ts',
            '.jsx',
            '.tsx',
            '.android.js',
            '.ios.js',
            '.web.js'
          ],
          root: ['./'],
          alias: {
            Native: path.resolve(__dirname, 'src/'),
          },
        }],
    ]
  };
};
