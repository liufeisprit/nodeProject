const mysql = require('mysql')
    // 1 连接 哪台数据库 主机 用户名密码 库
var db = mysql.createConnection({ host: 'localhost', user: 'root', password: 'root', database: '1229' })
console.log(db)
    // 2 查询 
    // 查询 query
    /*SQL写法 关键字大写 库 表 字段加上``
    增删改查
    INSERT INTO 表（字段列表） VALUES(值列表)
    增 INSERT INTO usertab(ID,username,password) VALUES (0,'liu' '123456')
    删 DELETE
    改 UPDATE
    查 SELECT SELECT 什么 FROM  表
    SELECT * FROM usertab
    */
db.query('SELECT * FROM usertab', (err, data) => {
    if (err) {
        console.log('出错' + err)
    } else {
        console.log(JSON.stringify(data))
    }
})