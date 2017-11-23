var express = require("express");
var app = express();
 
app.all("*", function(request, response, next) {
    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });      //设置响应头属性值
    console.log('all')
    next();
});
 
app.get("/", function(request, response) {
    response.end("欢迎来到首页!");
});
 
app.get("/about", function(request, response) {
    response.end("欢迎来到about页面!");
});
 
app.get("*", function(request, response) {
    response.end("404 - 未找到!");
});
 
app.listen(8080);