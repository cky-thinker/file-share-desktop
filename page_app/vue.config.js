const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const name = "file-share 文件共享"; // 网页标题
module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? './' : '././',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.js', // 入口文件
      title: name
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'));
  },
  devServer: {
    proxy: {
      '/sockjs-node/info': {
        target: 'http://127.0.0.1:8080',
        ws: true,
        changeOrigin: true
      },

    }
  }
}
