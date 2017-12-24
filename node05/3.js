const ejs=require('ejs')
const fs = require('fs')
const server = require('http')
ejs.renderFile('./views/3.ejs',{json:{arr:[
    {user:'blue',pass:'123123'},
    {user:'blue2',pass:'5324'},
    {user:'blue3',pass:'9999'},
]}},(err,data)=>{
    server.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write(data)
        res.end()
    }).listen(8080)
})