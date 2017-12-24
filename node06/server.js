const express=require('express')
const static=require('express-static')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const cookieSession=require('cookie-sessiong')
const jade=require('jade')
const ejs=require('ejs')
var server=express()
server.listen(8080)

// 1 解析cookie
 server.use(cookieParser('liufei'))
// 2 使用sessiong
var arr=[];
for(var i=0;i<100000;i++){
    arr.push('keys_'+Math.random())
}
server.use(cookieSession({name:'liu',keys:arr,maxAge:20*3600*1000}))
// 3 post参数
server.use(bodyParser.urlencoded({extended:false}))
// 用户登录
server.use('/',(req,res,next)=>{
    console.log(req.query,req.body,req.cookies,req.session);
})