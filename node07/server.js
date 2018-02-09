const mysql = require('mysql')
    // 1 连接 哪台数据库 主机 用户名密码 库
var db = mysql.createConnection({ host: 'localhost', user: 'root', password: 'root', database: '1229' })
    // console.log(db)
    // 2 查询 
    // 查询 query
    /*SQL写法 关键字大写 库 表 字段加上``
    增删改查
    INSERT INTO 表（字段列表） VALUES(值列表)
    增 INSERT INTO usertab(ID,username,password) VALUES (0,'liu' '123456')
    删 DELETE  'DELETE FROM usertab where username="xijinping"'
    改 UPDATE
    查 SELECT SELECT 什么 FROM  表
    SELECT * FROM usertab 'SELECT username FROM usertab',
    DISTINCT DISTINCT 列 FROM 表 仅仅列出不同（distinct）的值。
    AND OR SELECT * FROM 表 where AND
    ORDER BY  DESC倒序 ASC正序
    SELECT ID,username FROM usertab LIMIT 5' 选取头五条数据
    'SELECT ID,username FROM usertab WHERE username LIKE "w%"' 查询w开头的数据 %n n结尾的 %n%包含n的
    */
    //where =等于 <>不等于 >大于 <小于 BETWEEN在之间  not between 不包含
    // db.query('SELECT username,id FROM usertab where ID NOT BETWEEN 3 AND 7', (err, data) => {
    //     if (err) {
    //         console.log('出错' + err)
    //     } else {
    //         console.log(JSON.stringify(data))
    //     }
    // })

// distinct 列出不同的查询结果
// db.query('SELECT DISTINCT password FROM usertab', (err, data) => {
//     if (err) {
//         console.log('出错' + err)
//     } else {
//         console.log(JSON.stringify(data))
//     }
// })

//查询所有 从 usertab里查询 条件 username =‘LIU’并且密码 12312 与AND 或OR
// db.query('SELECT * FROM usertab where username="LIU" OR password="12313" ', (err, data) => {
//     if (err) {
//         console.log('出错' + err)
//     } else {
//         console.log(JSON.stringify(data))
//     }
// })

//查找 ID username 从usertab 顺序排列 username id DESC 降序 ASC升序
// db.query('SELECT ID,username FROM usertab ORDER BY ID', (err, data) => {
//     if (err) {
//         console.log('出错' + err)
//     } else {
//         console.log(JSON.stringify(data))
//     }
// })


//查找 id username 从 usertab表 ID小于5 的 前五条
// db.query('SELECT ID,username FROM usertab where ID<5 LIMIT 5 ', (err, data) => {
//     if (err) {
//         console.log('出错' + err)
//     } else {
//         console.log(JSON.stringify(data))
//     }
// })

//查找username 中包含ang的 通配符 %替代一个或多个字符 _ 替代一个字符 [] 字符列里任何一个单一的字符
// db.query('SELECT ID,username FROM usertab WHERE username LIKE "%ang%"', (err, data) => {
//     if (err) {
//         console.log('出错' + err)
//     } else {
//         console.log(JSON.stringify(data))
//     }
// })

//从usertab表 修改password为888条件为ID=1
// db.query('UPDATE usertab SET password ="8888888" WHERE ID=1 ', (err, data) => {
//     if (err) {
//         console.log('出错' + err)
//     } else {
//         console.log(JSON.stringify(data))
//     }
// })

// db.query('INSERT INTO usertab (ID,username,password) VAlUES(0,"阿三","qazwsxedc2")', (err, data) => {
//     if (err) {
//         console.log('出错' + err)
//     } else {
//         console.log(JSON.stringify(data))
//     }
// })

// db.query('DELETE FROM usertab WHERE ID>14', (err, data) => {
//     if (err) {
//         console.log('出错' + err)
//     } else {
//         console.log(JSON.stringify(data))
//     }
// })

// _ 只匹配一个字符 
// db.query('SELECT * FROM usertab WHERE username REGEXP "w[a]" ', (err, data) => {
//     if (err) {
//         console.log('出错' + err)
//     } else {
//         console.log(JSON.stringify(data))
//     }
// })

// in匹配多个条件
// db.query('SELECT * FROM usertab WHERE username in ("aaa","liu") ', (err, data) => {
//     if (err) {
//         console.log('出错' + err)
//     } else {
//         console.log(JSON.stringify(data))
//     }
// })

// db.query('SELECT ID,username FROM')