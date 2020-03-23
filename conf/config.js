// 获取请求参数
function getParams (req) {
  var param

  if (Object.keys(req.query).length) {
    param = req.query // get
  } else {
    param = req.body // post
  }

  return param
}

const baseConfig = {
  IMG_UPLOAD_FOLDER: '/upload_img/',
  DOMAIN: 'http://192.168.8.109:3000/'
}

module.exports = {
  getParams: getParams,
  baseConfig: baseConfig
}
