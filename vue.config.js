
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    //应用部署在域名下的 路径 默认为根路径 '/'
    publicPath: '/',
    //构建文件存放的目录
    outputDir: 'music',
    //打包构建配置选项
    configureWebpack: {
        devtool: isProd ? false : 'source-map',
        //webpack-dev-server 配置选项
        devServer: {
            open: true,
            port: 8081,
            hot: true,
            //配置代理 支持跨域
            proxy: {
                '/netease-api': {
                    //代理目标路径
                    target: 'http://localhost:3000',
                    //将 'netease-api' 改写为 ''
                    pathRewrite: {'^/netease-api': ''},
                    //开启跨域属性
                    changeOrigin: true,
                    //默认不接受 运行在 HTTPS 上，如果想要接受 将 secure 设置为false
                    secure: false
                }
            }
        },
        //引入一个库 而不被 webpack 打包，可以使用external
        externals: isProd ? {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            vuex: 'Vuex',
            axios: 'axios'
        } : {}
    }
}