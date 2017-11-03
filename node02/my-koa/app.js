const Koa=require('koa')
const app=new Koa()
const router=require('koa-router')()
const bodyPaster=require('koa-bodyparser')
const fs=require('fs')
// app.use(async (ctx,next)=>{
//     console.log('第一1')
//     await next()
//     console.log('第一2')
//     // console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
//     ctx.response.type='text/html'
//     ctx.response.body='<h1>Hello koa2</h1>'
// })
// app.use(async (ctx, next) => {
//     console.log('第二1')
//     await next(); // 调用下一个middleware
//     console.log('第二2')
// });
// app.use( ( ctx, next ) => {
//     const start = new Date();
//     return next().then( () => {
//       const ms = new Date() - start;
//       console.log( `time: ${ms}` );
//     } );
//   } );
  
//   app.use( ctx => {
//     ctx.body = "Hello My Test";
//   } );
// app.use(async (ctx, next) => {
//     // console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
//     await next(); // 调用下一个middleware
// });
// router.get('/',async (ctx,next)=>{
//     ctx.response.body='<h1>Index</h1><form action="/signin" method="post"><p>name: <input type="text" value="koa" name="name"></p>'+
//     '<p>password: <input type="password"  name="password"></p><p><input type="submit"  name="submit"></p>'
//     '</form>'
// })
// router.post('/signin',async (ctx,next)=>{
//     var 
//         name=ctx.request.body.name||'';
//         password=ctx.request.body.password||''
//     console.log(`sign Name:${name},password:${password}`)
//     if(name=='liufei'&&password==123456){
//         ctx.response.body=`<h1>welcome ${name}</h1>`
//     }else{
//         ctx.response.body='<h1>登陆失败</h1><p><a href="/">再次登陆</a></p>'
//     }
// })
// router.get('/hello/:name',async (ctx,next)=>{
//     var name=ctx.params.name;
//     ctx.response.body=`<h1>${name}</h1>`
// })
app.use(bodyPaster())


// app.use(async (ctx, next) => {
//     const start = new Date().getTime(); // 当前时间
//     await next(); // 调用下一个middleware
//     const ms = new Date().getTime() - start; // 耗费时间
//     console.log(`Time: ${ms}ms`); // 打印耗费时间
// });

// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

//用readFileSynv列出所有文件
var files=fs.readdirSync(__dirname+'/controllers')
//过滤出js的文件
var js_file=files.filter((f)=>{
    return f.endsWith('.js')
})

for(var f of js_file){
    console.log(f)
    //导入js文件
    let mapping=require(__dirname+'/controllers/'+f);
    // console.log('mapping: '+mapping)
    for(var url in mapping){
        // console.log('url:'+ url)
        // console.log(url)
        if(url.startsWith('GET')){
            var path=url.substring(4);
            router.get(path,mapping[url])
        }else if(url.startsWith('POST')){
            var path=url.substring(5);
            router.post(path,mapping[url])
            console.log(`register URL mapping: POST ${path}`);
        }else{
            //无效的url
            console.log('无效的url')
        }
    }
}
app.use(router.routes())
app.listen(1111)
// console.log('app started at port 3000...');