module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '上海金润二当家供应链管理有限公司'
        return [...args]
      })
  }
}