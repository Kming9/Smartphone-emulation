const path = require('path');
console.log(__dirname);

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'index.js',
        publicPath: '/dist'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname),
            watch: true
        },
        hot: true
    }
}