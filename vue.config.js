module.exports = {
  lintOnSave: false,
  css: {
    extract: false
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
}
