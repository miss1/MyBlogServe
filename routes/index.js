/**
 *路由，后台管理系统
 */

var userDao = require('../dao/userDao')

/* 后台登陆页 */
function login (req, res, next) {
  res.render('index', { title: 'Lynn\'s blog', msg: '' })
}

/* 登录 */
function doLogin (req, res, next) {
  console.log(req.body)
  const user = req.body.username
  const paw = req.body.password

  if (user === 'admin' && paw === '123456') {
    req.session.admin = 'admin'
    res.redirect('/admin/home?page=1&pageSize=10')
  } else {
    res.render('index', { title: 'Lynn\'s blog', msg: '用户名或密码错误！' })
  }
}

/* home */
function home (req, res, next) {
  userDao.getArticleList(req, (result, tag) => {
    if (tag) {
      res.render('home', result)
    } else {
      res.render('error', result)
    }
  })
}

function editor (req, res, next) {
  res.render('editor', { title: 'editor', msg: '' })
}

module.exports = {
  login: login,
  doLogin: doLogin,
  home: home,
  editor: editor
}
