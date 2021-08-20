import path from 'path';
const __dirname = path.resolve();
console.log(__dirname);

export default {
    mode: 'development', // webpack4 부터 필수
    entry: './src/main.js',
    output: {
        filename: 'index.js',
        publicPath: '/dist'
    },
    devServer: {
        static: {
            directory: __dirname,
            watch: true
        },
        hot: true
    }
}