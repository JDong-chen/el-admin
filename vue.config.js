module.exports = {
  publicPath: "./",
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue"
      }
    },
    watchOptions:{
      aggregateTimeout: 5000,
      poll: 5000,
      ignored: /node_modules/
    }
  }
}