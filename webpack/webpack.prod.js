const { merge } = require('webpack-merge');
const path = require('path');

const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  entry: './src/index.tsx',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'react-hls-player.js',
    libraryTarget: 'umd',
    library: 'react-hls-player',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  optimization: {
    usedExports: true,
    sideEffects: false,
  },
  externals: {
    react: 'commonjs react',
  },
});
