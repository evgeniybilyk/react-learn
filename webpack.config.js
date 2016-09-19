var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var path = require("path");
var ip = require("ip");

module.exports = {
    context: __dirname,
    entry: {
        'js/home': "./src/js/home",
        'js/about': "./src/js/about",
        'js/main': "./src/js/main",
        'js/common': "./src/js/common"
    },

    output: {
        path: path.join(__dirname, 'public'),
        filename: "[name].js",
        library: "[name]",
        sourceMapFilename: "debugging/[file].map"
    },

    
    /** Start: Настройки для поиска модулей*/
    resolve: {
        modulesDirectories: ["node_modules"],
        extensions: ["", ".js"]
    },

    resolveLoader: {
        modulesDirectories: ["node_modules"],
        moduleTemplates: ["*-loader"],
        extensions: ["", ".js"]
    },
    /** End */

    devtool: "source-map",

    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "js/common"
        }),
        new HtmlWebpackPlugin({
            title: 'Learn Webpack',
            template: 'src/templates/index.html.tpl',
            inject: true,
            cache: true
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    externals: {
        lodash2: "_"
    },

    devServer: {
        outputPath: path.resolve(__dirname, "public"),
        host: ip.address(),
        port: 3001,
        contentBase: path.resolve(__dirname, "public"),
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};
