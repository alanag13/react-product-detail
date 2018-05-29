'use strict';

const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const webpack = require('webpack');
const isProduction = process.argv.indexOf('-p') !== -1;

const packageJson = require('./package.json');
const vendorDependencies = Object.keys(packageJson['dependencies']);

const cleanPlugin = new CleanWebpackPlugin(['public']);

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const definePlugin = new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV':isProduction ? JSON.stringify('production') : JSON.stringify('development')
        }
    });

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
      "react",
      [
        "env",
        {
          "modules": false
        }
      ]
    ]
  }
};

module.exports = {
    devtool: isProduction ? undefined : 'inline-source-map',
    cache: true,
    entry: {
        productDetail: './src/main.tsx',
        vendors: vendorDependencies,
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                babelLoader,
                {
                    loader: 'ts-loader'
                }
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
            babelLoader
            ]
        }]
    },
    optimization: {
        splitChunks: {
            name: true,
            cacheGroups: {
                commons: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" }
            }
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [cleanPlugin, htmlPlugin, definePlugin]
};