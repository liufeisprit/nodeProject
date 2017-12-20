const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
var server = express()
    //cookie
server.use(cookieParser('wadsdsad'))
server.use(cookieSession({
    name: 'sess',
    keys: ['aaa', 'bbb', 'ccc'],
    maxAge: 2 * 24 * 3600 * 1000
}))
server.use('/', (req, res) => {
    // cookie加密
    req.secret = 'wadsdsad'
    res.cookie('user', '123456', { path: '/', signed: true, maxAge: 30 * 24 * 3600 * 1000 })
        // console.log(req.cookies) //存的是没有加密的cookie 不带签名的
        // console.log(req.signedCookies) //带签名的cookie 签名会增加体积
    res.clearCookie('user')
    console.log(req.session) //需要一个keys
    if (!req.session['count']) {
        req.session['count'] = 1
    } else {
        req.session['count']++
    }
    console.log(req.session['count'])
        //session sig是签名是可以变的 session ID是不会变得
        // console.log(req.method)
        // console.log(req.url)
    res.send('of')

})
server.listen(8080)