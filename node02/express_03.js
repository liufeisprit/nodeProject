var express=require('express')
var app=express()
// app.set('title', 'My Site');
// console.log(app.get('title'));
// => "My Site"

// app.enable('liufei')//讲设置项的值改为true
// console.log(app.get('liufei'))
// app.disable('liufei')
// console.log(app.get('liufei'))//讲设置项的值改为false
// console.log(app.enabled('liufei'))//检查设置项 是否已启用
// console.log(app.disabled('liufei'))//检查设置项 是否已禁用
app.set('title', 'My Application');

// 只用于开发环境
if ('development' == app.get('env')) {
  app.set('db uri', 'localhost/dev');
}

// 只用于生产环境
if ('production' == app.get('env')) {
  app.set('db uri', 'n.n.n.n/prod');
}
console.log(app.get('db uri'));
