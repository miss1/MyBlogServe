var db = require('../common/basicConnection')
var $sqlCommands = require('../common/sqlCommand')
var config = require('../conf/config')

/**
 * 添加一个用户
 */
function addUserAction (req, res, next) {
  // 获取前台页面传过来的参数
  const param = config.getParams(req)
  // 执行query
  db.queryArgs($sqlCommands.user.insertOne, [param.avatar, param.introduction, param.signature, param.nickName, param.titleName], function (err, result) {
    if (!err) {
      result = {
        code: 200,
        msg: '注册成功'
      }
    }
    // 以json形式，把操作结果返回给前台页面
    db.doReturn(res, result)
  })
}

function getArticleList (req, callback) {
  const param = config.getParams(req)
  const size = parseInt(param.pageSize)
  const total = (parseInt(param.page) - 1) * size
  let sqlRes = {}

  const queryList = new Promise((resolve, reject) => {
    db.queryArgs($sqlCommands.article.queryByPage, [total, size], (err, result) => {
      if (!err) {
        const arrayList = JSON.parse(JSON.stringify(result))
        console.log(arrayList)
        resolve(arrayList)
      } else {
        console.log(err)
        reject(err)
      }
    })
  })

  const queryCount = new Promise((resolve, reject) => {
    db.query($sqlCommands.article.queryCount, (err, result) => {
      if (!err) {
        const count = JSON.parse(JSON.stringify(result[0]))['COUNT(*)']
        console.log(count)
        resolve(count)
      } else {
        console.log(err)
        reject(err)
      }
    })
  })

  Promise.all([queryList, queryCount]).then(data => {
    sqlRes = {
      title: 'home',
      curPage: parseInt(param.page),
      pageSize: size,
      total: data[1],
      totalPage: Math.ceil(data[1] / size),
      data: data[0]
    }
    console.log(sqlRes)
    callback(sqlRes, true)
  }, err => {
    console.log(err)
    sqlRes = { title: 'home', message: 'Database Query Error', error: { status: 500 } }
    callback(sqlRes, false)
  })
}

function deleteArticle (req, res) {

}

module.exports = {
  addUserActions: addUserAction,
  getArticleList: getArticleList
}
