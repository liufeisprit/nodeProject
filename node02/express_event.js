var express=require('express')
var app=express()
var admin=express()
admin.on('mount',function(parent){
    console.log('Admin Mounted')
    console.log(parent.mountpath)
})
admin.get('/',function(req,res){
    res.send('Admin HomePage')
})
app.use('/admin',admin)
app.listen(3000)