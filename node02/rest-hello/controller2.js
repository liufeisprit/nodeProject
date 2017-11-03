var fs=require('fs')

function addmapping(router,mapping){
    for(var url in mapping){
        if(url.startsWith('GET')){
            let path=url.substring(4)
            router.get(path,mapping[url])
        }
        else if(url.startsWith('POST')){
            let path=url.substring(5)
            router.post(path,mapping[url])
        }
        else if(url.startsWith('PUT')){
            let path=url.substring(4)
            router.put(path,mapping[url])
            
        }
        else if(url.startsWith('DELETE')){
            let path=url.substring(7)
            router.del(path,mapping[url])
        }
        else{
            console.log(`无效的Url:${url}`)
        }
    }
}

function addController(router,dir){
    fs.readdirSync(__dirname+'/'+dir).filter((f)=>{
        return f.endsWith('.js')
    }).forEach((f)=>{
        let mapping=require(__dirname+'/'+dir+'/'+f)
        addmapping(router,mapping)
    })
}




module.exports=function(dir){
    let
        controller_dir=dir||'controller',
        router=require('koa-router')()
    addController(router,controller_dir)
    return router.routes()
}