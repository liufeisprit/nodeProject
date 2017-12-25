const express = require('express')
const static = require('express-static')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const jade = require('jade')
const ejs = require('ejs')
const multer = require('multer')
const consolidate = require('consolidate')
var server = express()
server.listen(8080)

// 1 解析cookie
server.use(cookieParser('liufei'))
    // 2 使用sessiong
var arr = [];
for (var i = 0; i < 100000; i++) {
    arr.push('keys_' + Math.random())
}
server.use(cookieSession({ name: 'liu', keys: arr, maxAge: 20 * 3600 * 1000 }))
    // 3 post参数
server.use(bodyParser.urlencoded({ extended: false }))
    // multer dest 上传的目标地点
server.use(multer({ dest: './www/upload' }).any())
    //配置模板引擎
    //输出什么东西
server.set('view engine', 'html')
    //模板引擎放在哪
server.set('views', './views')
    //哪种模板引擎
server.engine('html', consolidate.ejs)
    // 用户登录

server.get('/index', (req, res, next) => {
        if (!req.session['userId']) {
            req.session['userId'] = 1
        }
        if (req.session.userId) { //登陆过
            res.render('1.ejs', { name: 'liufei' })
        } else { //没有登录过
            res.render('login.ejs', { name: 'liufei' })
        }

    })
    // server.use('/', (req, res, next) => {
    //     console.log(req.query, req.body, req.cookies, req.session);
    // })