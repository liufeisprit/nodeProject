var express = require('express');
var app = express();
//使用中间件 function,可选参数path默认为"/"
// 一个简单的 logger
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// 响应
// app.use(express.static(__dirname + '/my-koa'));
app.use(function(req, res, next){
  res.send('Hello World');
});

app.listen(3000);