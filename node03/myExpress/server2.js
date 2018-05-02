const express = require('express')
const expressStatic = require('express-static')
var server = express()
    //express-static直接指定目录

var users = {
        'zhangsan': '123456',
        'liu': '123456'
    } //存储用户数据
    //user:123,pass:123456
server.get('/',(req,res,next)=>{
    res.send('3000')
})
server.get('/login', (req, res) => {
    console.log(req.query) //req.query直接把get数据分割开来{ user: '123', pass: '123' }
    var user = req.query['user']
    var psd = req.query['pass']
    if (users[user] == null) {
        res.send({ ok: false, msg: '此用户不存在' })
    } else {
        if (users[user] != psd) {
            res.send({ ok: false, msg: '密码错误' })
        } else {
            res.send({ ok: true, msg: '登录成功' })
        }
    }
})

server.use(expressStatic('./www'))

server.listen(3000)