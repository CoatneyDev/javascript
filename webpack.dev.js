const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{
    mode: 'development',
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
       
    },
    plugins: [
        new HtmlWebpackPlugin({
            //inject: false,
            template: './src/template.html'
        })
    ],
    devServer: {
        watchContentBase: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
        ]
    } 

});