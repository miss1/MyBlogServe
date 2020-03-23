/**
 * mysql语句集合
 */

// user表
var user_status = {
  insertOne: 'INSERT INTO user (avatar, introduction, signature, nickName, titleName) VALUES(?, ?, ?, ?, ?)',
  deleteOne: 'DELETE FROM user WHERE id = ?',
  updateOne: 'UPDATE user SET avatar= ?,introduction = ?,signature = ?,nickName = ?,titleName = ? WHERE id = ?',
  searchById: 'SELECT * FROM user WHERE id = ?'
}

// article表
var article_status = {
  insertOne: 'INSERT INTO article (content, title, subtitle, timestamp, cover) VALUES(?, ?, ?, ?, ?)',
  deleteOne: 'DELETE FROM article WHERE id = ?',
  updateOne: 'UPDATE article SET content= ?,title = ?,subtitle = ?,timestamp = ?,cover = ? WHERE id = ?',
  queryById: 'SELECT * FROM article WHERE id = ?',
  queryByPage: 'SELECT * FROM article ORDER BY timestamp DESC LIMIT ?,?',
  queryCount: 'SELECT COUNT(*) FROM article'
}

module.exports = {
  user: user_status,
  article: article_status
}
