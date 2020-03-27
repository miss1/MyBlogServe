# MyBlog



## Database Design

数据库结构 @directory blog.sql



## 后端

myBlogServe

### 架构

- nodejs >= 8.16.2
- express
- mysql
- stylus
- pug



### 导入项目

idea导入项目

npm install 在项目根目录打开命令行工具，安装依赖包

配置configurations

![](D:\PersonalCode\myBlog\myBlogServe\Screenshot\serve.png)



### 文件目录结构

```
@directory bin 启动项目的脚本文件
@directory common 公共方法（正则、sql、二次封装）
@directory conf 开发配置文件（数据库连接、邮件配置）
@directory dao 操作数据库，接口的实现
@directory public 前端静态文件（image、js、stylus）
@directory routes 路由
@directory views 页面文件（pug）
```

