const ejs=require('ejs')
ejs.renderFile('./views/1.ejs',{json:{arr:[
    {user:'blue',pass:'123123'},
    {user:'blue2',pass:'5324'},
    {user:'blue3',pass:'9999'},
]}},(err,data)=>{
    console.log(data)
})