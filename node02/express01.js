var express=require('express')
var app=express()
var admin = express(); // the sub app

admin.get('/', function (req, res) {
  console.log(admin.mountpath); // /admin
  res.send('Admin Homepage');
})

// app.use('/admin', admin)
var secret=express();
secret.get('/',function(req,res){
    console.log(secret.mountpath)
    res.send('Secret HomePage')
})
admin.use('/secret',secret)
app.use(['/admin','/manager'],admin)
// var koa = require('koa');
// var app = koa();

// app.use('/test', function *() {
//     yield doReadFile1();
//     var data = yield doReadFile2();
//     this.body = data;
// });

app.listen(3000);
//多层级路由分发


