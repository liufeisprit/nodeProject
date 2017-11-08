const fs=require('fs')

function addMapping(router,mapping){
    for(var url in mapping){
        if(url.startsWith('GET')){
            router.get(url.substring(4),mapping[url])
        }else if(url.startsWith('POST')){
            router.post(url.substring(5),mapping[url])
        }else if(url.startsWith('PUT')){
            router.put(url.substring(4),mapping[url])
        }
        else if(url.startsWith('DELETE')){
            router.del(url.substring(7),mapping[url])
        }else{
            console.log('无效的url'+url)
        }
    }
}
function addController(router,dir){
    fs.readdirSync(__dirname+''+dir).filter((f)=>{
        return f.endsWith('.js')
    }).forEach((f)=>{
        let mapping=require(__dirname+'/'+dir+"/"+f)
        
    })
}
module.exports=function(dir){
    let 
        controller_dir=dir||'controller'
        router=require('koa-router')()
    addController(router,dir)
    return router.routes()
}