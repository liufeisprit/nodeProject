const express=require('express')
var server=express()
server.get('/',(req,res)=>{
    console.log('有GET')
})
server.post('/',(req,res)=>{
    console.log('有post')
})
server.listen(8080)
//req res 非侵入式的 保留了原生的功能 只是增加了方法
//创建服务 监听 处理请求
//3种接受请求 get post use