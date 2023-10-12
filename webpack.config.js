const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");

const port = process.env.PORT || 3000

module.exports = {
    mode: "development",
    entry: './public/src/index.js',
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        // Reglas
        rules: [
            // Primera regla
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // Segunda regla
            {
                test: /\.css/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportLocalsConvention: "camelCase"
                            },
                            sourceMap: true
                        }
                    }
                ]

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            favicon: "public/favicon.ico",
            filename: "./index.html"
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    }
}
