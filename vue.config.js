// vue.config.js
const entry = 'givemefive';
module.exports = {
    publicPath: '',
    outputDir: 'target/classes/META-INF/resources/webjars',
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
        openPage: `${entry}.html`
    }
}