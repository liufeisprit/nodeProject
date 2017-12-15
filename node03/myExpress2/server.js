const express = require('express')
const bodyParser2 = require('./libs/my_boderParser')
var server = express()
server.listen(8080)
    // server.use(bodyParser.urlencoded({
    //         extended: true, //扩展模式
    //         limit: 2 * 1024 * 1024 //限制大小
    //     }))
server.use(bodyParser2.aaa)
    //post需要中间件
    // server.use('/', (req, res, next) => {
    //     // console.log('a')
    //     next()
    // })
server.use('/', (req, res, next) => {
        console.log(req.body)
            // console.log('b')
    })
    //链式操作
    //req.body POST数据 需要中间件
    //req.query GET数据

/*
GET POST
req.query
server.use(bodyParser2)
erver.use('/', (req, res, next) => {
    console.log(req.body)
        // console.log('b')
})
*/