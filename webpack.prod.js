const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const OptmizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{
    mode: 'production',
    output: {
        filename: 'js/[name].[contentHash].bundle.js',
        path: path.resolve(__dirname,'dist') ,
        
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css'
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [
            new OptmizeCssAssetsPlugin(), 
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                //inject: false,
                template: './src/template.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
            }),
        ]
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Extract CSS into files 
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
        ]
    } 
});