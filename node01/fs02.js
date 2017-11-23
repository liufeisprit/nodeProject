const fs=require('fs')
fs.readFile('test.txt','utf-8',function(err,data){
    console.log(data)//异步操作 有时候为空 有时候为 1234
})
fs.writeFile('test.txt','1234',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('OK')
    }
})