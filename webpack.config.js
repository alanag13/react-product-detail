'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');
const webpack = require('webpack');
const isProduction = process.argv.indexOf('-p') !== -1;

const packageJson = require('./package.json');
const vendorDependencies = ["react","react-dom"];

const cleanPlugin = new CleanWebpackPlugin(['public']);

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
    excludeAssets: [/styles.*.js/]
});

const definePlugin = new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV':isProduction ? JSON.stringify('production') : JSON.stringify('development')
        }
    });

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "style.css",
    chunkFilename: "[name].[contenthash].css"});

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
      'react',
      [
        'env',
        {
          'modules': false
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
        },
        {
            test: /\.css/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
                ]        
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
            'file-loader'
            ]
        }
    ]
    },
    optimization: {
        splitChunks: {
            name: true,
            cacheGroups: {
                commons: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" },
                styles: { 
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [cleanPlugin, htmlPlugin, miniCssExtractPlugin, definePlugin]
};