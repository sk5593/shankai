// vue.config.js
const entry = 'fileUpload';
const apiUrl = 'http://127.0.0.1:8888';
module.exports = {
    publicPath: '/',
    // outputDir: '',
    lintOnSave: true,
    productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    pages:{
        fileUpload: {
            entry: 'src/pages/fileUpload/main.js',
            template: 'src/pages/fileUpload/fileUpload.html'
        },

    },
    devServer:{
        host: '127.0.0.1',
        port: 8080,
        open: true,
        openPage: `${entry}.html`,
        proxy: {
            '/api': {
                target: apiUrl,
                ws: true,
                // pathRewrite: {
                //     '^/apis/c': '/'
                // },
            }
        }
    }
}
