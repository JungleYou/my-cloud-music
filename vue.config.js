const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 自己对应文件路径，全局变量路径，不能使用路径别名
        path.resolve(__dirname, "./src/styles/index.less"),
      ],
    },
  },
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
  },
  devServer: {
    proxy: {
      "/": {
        target: "http://117.50.177.183:3000",
        changeOrigin: true,
        ws: false,
      },
    },
  },
  publicPath: "./",
});
