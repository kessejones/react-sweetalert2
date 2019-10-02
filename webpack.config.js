const path = require('path');

module.exports = {
    entry: {
        app: './src/app.ts'
    },
    output: {
        library: 'react-sweetalert2',
        libraryTarget: 'umd',
        path: path.join(__dirname, 'build'),
        filename: 'react-sweetalert2-bundle.js',
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: [/node_modules/, /example/],
            use: [
                {
                    loader: 'ts-loader'
                }
            ]
        }] 
    },
    resolve: {
        extensions: [
            '.tsx', '.ts', '.js', '.jsx'
        ]
    }
}
