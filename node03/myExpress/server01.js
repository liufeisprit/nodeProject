const express=require('express')
const expressStatic = require('express-static')
var server=express()
server.get('/',(req,res,next)=>{
    res.send('hello world')
})
server.get('/test',(req,res)=>{
    // console.log(req)
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    var _callback = req.query.callback;
    var _data =JSON.stringify( { email: 'example@163.com', name: 'sb' } );

    
    //express 可以这样
    // var callback = `${_callback`(_data)`}`;
    // var callback = _callback+'('+_data+');';
    // res.end(callback);
    console.log(_callback)
    if (_callback){
        var callback = `${_callback+`(${_data})`}`;
        res.type('text/javascript');
        res.send(callback);
    }
    else{
        
        res.json(_data);
    }

})
server.post('/',(req,res)=>{
    console.log('有post')
})
server.use(expressStatic('./js'))
server.listen(8080)
//req res 非侵入式的 保留了原生的功能 只是增加了方法
//创建服务 监听 处理请求
//3种接受请求 get post use