'use strict';
var http=require('http')
var url=require('url')
var path=require('path')
//创建http server 并传入回调参数
var server=http.createServer(function(request,response){
    //回调参数接受  requeset response对象
    console.log(request.method+':'+request.url)
    response.writeHead(200,{'Content-Type':'text/html'})
    response.end('<h1>hello world</h1>')

    
})
var workDir=path.resolve('.')
console.log(workDir)//解析当前目录 D:\work\nodeProject\node01
var filePath=path.join(workDir,'pub','index.html')// 组合完整的路径名称 D:\work\nodeProject\node01\pub\index.html
console.log(filePath)
// server.listen(8080)
// console.log(url.parse('http://qqgo2o.phpcool.cn/#/member_center?ticket=29F8CD4D5-5A0A-AE7B-7855-5C767DFA6413'))