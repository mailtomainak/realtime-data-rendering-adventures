const path = require('path');
const webpack = require('webpack');

module.exports = {
    "entry": "./src/index.tsx",
    "mode": "development",
    "module": {
        rules: [{
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './dist'
    },
}