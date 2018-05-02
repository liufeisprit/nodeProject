const http=require('http')
const urlLib=require('url')
const fs=require('fs')
const querystring=require('querystring')

var users={}//{'blue':1234}
http.createServer((req,res)=>{
    
    
    var str='';
    // res.setHeader(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.setHeader('Access-Control-Allow-Origin','*');//设置跨域
    res.setHeader('Content-Type','text/html; charset=utf-8');
    req.on('data',function(data){
        str+=data;
    })
    req.on('end',function(){
        var obj=urlLib.parse(req.url,true);
        console.log(obj)
        var url=obj.pathname;//user?
        var GET=obj.query//{user:'213',pass:asdad} 问号之后的参数
        var POST=querystring.parse(str)//{user:'213',pass:asdad}
        // console.log(obj)
        // console.log(GET)
        // console.log(GET.act)
        if(url=='/user'){
            //接口
            switch(GET.act){
                case 'reg':
                //1检查用户名是否已经有了
                    if(users[GET.user]){
                        res.write(`{"ok":false,"msg":"此用户已经存在"}`)
                    }else{
                        users[GET.user]=GET.pass;
                        res.write(`{"ok":true,"msg":"注册成功"}`)
                    }
                    break;
                case 'login':
                //1检查用户名是否存在
                    if(users[GET.user]==null){
                        res.write(`{"ok":false,"msg":"此用户不存在"}`)
                    }else if(users[GET.user]!=GET.pass){
                //检查用户密码正确
                        res.write(`{"ok":false,"msg":"用户名或密码错误"}`)
                    }else{
                        res.write(`{"ok":true,"msg":"登录成功"}`)
                    }
                    break;
                default :
                    res.write(`{"ok":false,"msg":"未知的act"}`)
                    
            }
            console.log(users)
            res.end()
        }else{
            //读取文件
            var file_name='./www'+url;
            fs.readFile(file_name,function(err,data){
                if(err){
                    res.write('404')
                }else{
                    res.write(data)
                }
                res.end()
            })
        }
        
        

    })
}).listen(8080)