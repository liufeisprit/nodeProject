const http=require('http')
const querystring=require('querystring')//querystring模块
const urlLib=require('url')
//post可以很大 分段
//每当有一段数据到达时 触发方法 data
//end 结束时触发的方法
var server=http.createServer(function(req,res){
    var i=0;
    var str='';
    req.on('data',function(data){
        console.log(`第${i++}次发送数据`)
        str+=data;
    })
    req.on('end',function(){ 
        console.log(querystring.parse(str))
    })
    res.end()
})

server.listen(8080)