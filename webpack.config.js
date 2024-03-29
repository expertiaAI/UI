const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;


module.exports = {
    target : 'node',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'globalThis',
    },
    externalsPresets: {node: true},
    externals: [nodeExternals()],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                },
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
            {
                test: /\.css$/i,
                use: [{loader:'style-loader'}, {loader:'css-loader'}, {loader:'postcss-loader'},
                
            ],
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
    ]
}