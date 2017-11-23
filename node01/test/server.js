const http=require('http')
const querystring=require('querystring')//querystring模块
const urlLib=require('url')
var server=http.createServer(function(req,res){
    var get={}
   
    var obj=urlLib.parse(req.url,true)
    console.log(obj)
    get=obj.query;
   console.log(obj.pathname,get)
    // res.write('aa')
    res.end()
})
server.listen(8080)
