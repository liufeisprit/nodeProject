const express=require('express')
const bodyParser=require('body-parser')
const multer=require('multer')
const fs=require('fs')
const pathLib=require('path')
// path.parse('c:\\warp\\www\a.html')
//  base 文件名部分 ext 扩展名部分 name: a dir 路径
var server=express()
// fs.rename
server.use(bodyParser.urlencoded({extended:false}))
// multer dest 上传的目标地点
server.use(multer({dest:'./www/upload'}).any())
server.use('/',(req,res)=>{
    // req,files originalname原始文件名 
    var newName=req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
    console.log(req.files)
    fs.rename(req.files[0].path,newName,(err)=>{
        if(err){
            res.send('上传失败')
        }else{
            res.send('上传成功')
        }
    })
    console.log(req.files[0].path)
    // bodyParser不支持上传文件
})
server.listen(8080)
// body-parser用来解析 post过来的数据 application/x-ww.....
// multer 用来解析上传的文件 multipart/form-data