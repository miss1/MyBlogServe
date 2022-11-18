# MyBlog



## Database Design

database structure @directory blog.sql



## Back-end

myBlogServe

### Architecture

- nodejs >= 8.16.2
- express
- mysql
- stylus
- pug



### Import project

idea import project

npm install: Open the command line tool in the project root directory and install the dependency package

configurations

![](D:\PersonalCode\myBlog\myBlogServe\Screenshot\serve.png)



### File directory structure

```
@directory bin: Script file to start the project
@directory common: Public methods (regular, sql, secondary encapsulation)
@directory conf: Development configuration files (database connection, mail configuration)
@directory dao: Operation database, implementation of interface
@directory public: Front-end static files (image, js, stylus)
@directory routes: routing
@directory views: paging files (pug)
```

