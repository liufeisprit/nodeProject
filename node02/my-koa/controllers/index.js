var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

var fn_signin = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>`
    console.log(ctx.request.body)
    var
        name=ctx.request.body.name||'';
        password=ctx.request.body.password||''
        console.log(`sign Name:${name},password:${password}`)
        if(name=='koa'&&password==123456){
            ctx.response.body=`<h1>welcome ${name}</h1>`
        }else{
            ctx.response.body='<h1>登陆失败</h1><p><a href="/">再次登陆</a></p>'
        }
};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};