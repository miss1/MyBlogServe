/**
 * 路由集合
 * @param app
 */
exports.setRequestUrl = function (app) {
  var client = require('./client')
  var index = require('./index')

  /* 后台管理 */
  // page
  app.get('/admin/login', index.login)
  app.post('/admin/doLogin', index.doLogin)
  app.get('/admin/home', index.home)
  app.get('/admin/editor', index.editor)
  app.get('/admin/delete', index.deleteArticle)

  /* 客户端 */
  app.post('/admin/uploadFile', client.uploadFile)
  app.post('/client/test', client.test)
}
