const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');//构建时清理
const autoprefixer = require('autoprefixer');//补全css各种hack
const ExtractTextPlugin = require("extract-text-webpack-plugin");//分离样式表
const extractSass = new ExtractTextPlugin(process.env.NODE_ENV === 'production'?'css/[name]-sass.[chunkhash].css':'[name].min.css');//导出sass

module.exports = {
    devtool: process.env.NODE_ENV === 'production'?"inline-source-map":"source map",
    entry: {
        popup: './src/js/popup.js'
    },
    output: {
        filename: process.env.NODE_ENV === 'production'?'js/[name].bundle.[chunkhash].js':'[name].min.js',
        path: path.resolve(__dirname, 'lib')
    },
    module: {
        rules: [
            {
                test: /\.scss/i,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader','autoprefixer-loader'],
                    publicPath: "../"
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=font/[hash:8].[ext]'
                ]
            }
        ]
    },
    plugins: [
        //清理lib
        new CleanWebpackPlugin(['lib']),
        //丑化JS
        new webpack.optimize.UglifyJsPlugin({
            compress: process.env.NODE_ENV === 'production'
        }),
        //样式导出配置
        extractSass
    ]
};