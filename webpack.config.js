// html
// css
// js babel
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/js/index.js',
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        open: true,
        port: 9001
    }
};