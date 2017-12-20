//模板引擎 jade ejs
const jade = require('jade');
const fs = require('fs')
const server = require('http')
    //pretty true
var str = jade.renderFile('./views/5.jade', { pretty: true,arr:[1,2,3,4,5],content:"<h2>123</h2><p>阿斯大多数撒</p>"})
    console.log(str)
server.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write(str)
    res.end()
}).listen(8080)