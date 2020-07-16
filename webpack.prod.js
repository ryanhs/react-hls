const { merge } = require('webpack-merge');
const webpack = require('webpack');

const config = require('./webpack.config');

module.exports = merge(config, {
    mode: 'production',
    entry: './src/components/react-hls-player.js',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    externals: {
        'react': 'commonjs react'
    }
});
