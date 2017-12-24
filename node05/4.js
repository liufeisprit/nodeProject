const ejs=require('ejs')
const fs = require('fs')
const server = require('http')
ejs.renderFile('./views/6.ejs',{type:'admin'},(err,data)=>{
    server.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write(data)
        res.end()
    }).listen(8080)
})
/*
<!-- <%=%> 是转义输出 <%-%>是不转义输出 -->
*/