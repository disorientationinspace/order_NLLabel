const path = require('path');

module.exports = {
    mode: 'production',
    entry: './app/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    }
}