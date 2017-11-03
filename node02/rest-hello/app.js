const Koa=require('koa')
const controller=require('./controller2')
const app=new Koa()
const bodyParser=require('koa-bodyparser')

app.use(controller())
app.use(bodyParser())
app.listen(3000);
console.log('app started at port 3000...');