'use strict';
var fs=require('fs')
var rs=fs.createReadStream('test.txt','utf-8');
var ws=fs.createWriteStream('test2.txt','utf-8')
rs.pipe(ws)
rs.on('data',function(chunk){
    console.log('DATA')
    console.log(chunk)
})
rs.on('end',function(){
    console.log('end')
})
rs.on('err',function(err){
    console.log(err)
})
//data事件可能多次  每次传递的chunk都可能是一部分数据
