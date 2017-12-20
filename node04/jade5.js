//模板引擎 jade ejs
const jade = require('jade');
const fs = require('fs')
const server = require('http')
    //pretty true
var str = jade.renderFile('./views/6.jade', { pretty: true,})
    console.log(str)
server.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write(str)
    res.end()
}).listen(8080)