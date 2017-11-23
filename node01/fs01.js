'use strict';
//
var fs=require('fs')
//异步读取文件
fs.readFile('test.txt','utf-8',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data+'11111111')
        console.log(Buffer.from(data,'utf-8'))

    }
})
fs.readFile('bg@3x.png',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
        console.log(data.length+' bytes')
    }
})
//异步读取时 传入的回调函数接收两个参数 当正常读取时 err参数为Null
// data参数为读取到的string 当读取发生错误时 err参数代表一个错误对象
//data为undefined 

//当读取二进制文件时 不传入文件编码时 回调函数的data参数将返回一个Buffer
//对象.buffer对象就是一个包含一个或任意个字节的数组
// buffer.toString('utf-8') Buffer对象和String作转换
// String转Buffer Buffer.from(text,'utf-8')


//同步读取文件
var dd=fs.readFileSync('test.txt','utf-8')
console.log(dd+'----------------同步')

//写文件
fs.writeFile('test.txt','utf-8',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('OK!')
    }
})

fs.stat('test.txt',function(err,stat){
    if(err){
        console.log(err)
    }else{
        //是否是文件
        console.log('isFile:'+stat.isFile())
        //是否是目录
        console.log('isDir:'+stat.isDirectory())
        if(stat.isFile()){
            //文件大小
            console.log('size: '+stat.size)
            //创建时间
            console.log('创建时间: '+stat.birthtime)
            //修改时间
            console.log('修改时间: '+stat.mtime)
        }
    }
})

