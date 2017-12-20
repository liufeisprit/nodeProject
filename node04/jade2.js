//模板引擎 jade ejs
const jade = require('jade');
const fs = require('fs')
const server = require('http')
    //pretty true
var str = jade.renderFile('./views/1.jade', { pretty: true })
    // console.log(str)
server.createServer((req, res) => {
    res.write(str)
    res.end()
}).listen(8080)