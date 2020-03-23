var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var session = require('express-session')
var FileStore = require('session-file-store')(session)
var stylus = require('stylus')

var urlHelper = require('./routes/router')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(stylus.middleware(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

// session
app.use(session({
  name: 'skey',
  secret: 'buddhist', // 用来对session id相关的cookie进行签名
  store: new FileStore(), // 本地存储session（文本文件，也可以选择其他store，比如redis的）
  saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
  resave: false, // 是否每次都重新保存会话，建议false
  cookie: {
    maxAge: 30 * 60 * 1000 // 有效期，单位是毫秒
  }
}))

// 跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.send(200) // 让options请求快速返回
  } else {
    next()
  }
})

// 后台admin登陆拦截器
app.use(function (req, res, next) {
  var url = req.originalUrl
  if (url === '/') {
    return res.redirect('/admin/login')
  }
  if (url.indexOf('admin') !== -1) {
    if (url !== '/admin/login' && url !== '/admin/doLogin' && !req.session.admin) {
      return res.redirect('/admin/login')
    }
  }
  next()
})

// 路由设置
urlHelper.setRequestUrl(app)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
