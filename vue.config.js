module.exports = {
  lintOnSave: false,
  css: {
    extract: false
  },
  pages: {
    index: {
      entry: 'dev/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.externals = ['vue', 'Vue', 'element-ui', 'ElementUI']
    }
  }
}
