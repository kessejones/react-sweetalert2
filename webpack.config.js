const path = require('path');

module.exports = {
    entry: {
        app: './src/app.ts'
    },
    devtool: "source-map",
    output: {
        library: 'react-sweetalert2',
        libraryTarget: 'umd',
        path: path.join(__dirname, 'build'),
        filename: 'react-sweetalert2-bundle.js',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: [/node_modules/, /example/],
            use: [{ loader: 'awesome-typescript-loader' }]
        }] 
    },
    resolve: {
        extensions: [
            '.tsx', '.ts', '.js', '.jsx'
        ]
    }
}
