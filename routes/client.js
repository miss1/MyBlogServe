var express = require('express')
var config = require('../conf/config')
var formidable = require('formidable')
var fs = require('fs')
var userDao = require('../dao/userDao')

function test (req, res, next) {
  console.log(123)
  userDao.addUserActions(req, res, next)
  /* var result = {
    code: 200,
    msg: 'successful'
  };
  res.json(result); */
}

/* 图片上传 */
function uploadFile (req, res, next) {
  const form = new formidable.IncomingForm() // 创建上传表单
  form.encoding = 'utf-8' // 设置编辑
  form.uploadDir = 'public' + config.baseConfig.IMG_UPLOAD_FOLDER // 设置上传目录
  form.keepExtensions = true // 保留后缀
  form.maxFieldsSize = 2 * 1024 * 1024 // 文件大小

  let result = {
    uploaded: true,
    success: false,
    url: ''
  }

  form.parse(req, function (err, fields, files) {
    if (err) {
      res.json(result)
      return
    }
    let extName = '' // 后缀名
    switch (files.upload.type) {
      case 'image/pjpeg':
        extName = 'jpg'
        break
      case 'image/jpeg':
        extName = 'jpg'
        break
      case 'image/png':
        extName = 'png'
        break
      case 'image/x-png':
        extName = 'png'
        break
    }

    if (extName.length === 0) {
      res.json(result)
      return
    }

    const imgName = Math.random() + '.' + extName

    // 图片写入地址；
    const newPath = form.uploadDir + imgName
    // 显示地址；
    var showUrl = config.baseConfig.DOMAIN + config.baseConfig.IMG_UPLOAD_FOLDER + imgName
    fs.renameSync(files.upload.path, newPath) // 重命名

    result = {
      uploaded: true,
      success: true,
      url: showUrl
    }
    res.json(result)
  })
}

module.exports = {
  test: test,
  uploadFile: uploadFile
}
