// vue.config.js
const entry = 'givemefive';
const apiUrl = 'http://api-dev.yeedev.com/apis/c';
module.exports = {
    publicPath: '/',
    lintOnSave: true,
    pages:{
        givemefive: {
            entry: 'src/pages/givemefive/main.js',
            template: 'src/pages/givemefive/givemefive.html'
        }
    },
    devServer:{
        host: 'localhost.yeelight.com',
        port: 80,
        open: true,
        openPage: `${entry}.html`,
        proxy: {
            '/v1/user-coupons': {
                target: apiUrl,
                ws: true
            }
        }
    }
}