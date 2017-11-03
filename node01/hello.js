// 'use strict';
// var s='Hello';
// function greet(name){
//     console.log(s+','+name+'!')
// }
// module.exports=greet;
(function(){
    var s='hello';
    var name='world';
    console.log(s+' '+name+'!')
})
var module={
    id:'hello',
    exports:{}
}
var load=function(module){
    //读取的hello.js的代码
    function greet(name){
        console.log('Hello,'+name+'!')
    }
    module.exports=greet
    return module.exports;
}
var exported=load(module);
save(module,exported)