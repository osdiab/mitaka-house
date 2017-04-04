const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
    entry: [
        "core-js",
        "whatwg-fetch",
        "./src/scripts/app.ts",
    ],

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
    },

    output: {
        filename: "scripts.bundle.js",
        path: path.resolve(__dirname, "__build"),
    },

    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", '.ts', '.tsx', '.json'],
    },

    module: {
        loaders: [
            {
                test: /\.(css|scss)$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!postcss-loader!sass-loader',
                }),
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['awesome-typescript-loader'],
            },
        ],
    },

    plugins: [
        new ExtractTextPlugin("styles.bundle.css"),
    ],
}
