const express = require('express')
var server = express()
server.listen(8080)
    // 创建路由

var routerUser = express.Router()
routerUser.get('/1.html', (req, res) => {
    res.send('1.html')
})
routerUser.get('/2.html', (req, res) => {
        res.send('2.html')
    })
    //路由对应那个路径
server.use('/user', routerUser)
    // 目录2
var routerAirtle = express.Router()
    //路由对应那个路径
server.use('/airtle', routerAirtle)
routerAirtle.get('/122.html', (req, res) => {
    res.send('122.html')
})