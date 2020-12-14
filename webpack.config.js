const path = require('path');

module.exports = {
    entry: './src/scripts/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist/script'),
        filename: 'bundle.js'
      },
      devtool: 'inline-source-map',
      module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    }, 
    resolve: {
        extensions: ['.ts', '.js']
    }
};    