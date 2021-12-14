const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
//import ImageminPlugin from 'imagemin-webpack-plugin'
const ImageminPlugin = require ('imagemin-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[contenthash].js"
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset",
                use: [{
                loader: 'file-loader',
                options: {
                    name: '[name][hash:6].[ext]',
                    outputPath: 'images',
                    publicPath: 'images',
                    emitFile: true,
                    esModule: false
                },
                    loader: ImageminPlugin.loader,
                    options: {
                        bail: false,
                        cache: false,
                        imageminOptions: {
                            plugins: [
                                ["pngquant", {quality : [0.5, 0.5]}],
                                ["mozjpeg", {quality: 50, progressive: true}],
                                ["gifsicle", {interlaced: true, optimizationLevel: 3}]
                            ]
                        }
                    }
                }]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/assets/logo.png"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: __dirname + "/src/assets/photos.json",
                    to: __dirname + '/dist',
                    context: __dirname,
                },
            ],
        }),
        new CleanWebpackPlugin()
    ]
};