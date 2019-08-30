const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public/index.html')
})


module.exports = {
    entry: path.join(__dirname, 'src', 'app.js'),
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [{
            test: /\.js(x?)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [htmlPlugin],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: 3001
    },
}