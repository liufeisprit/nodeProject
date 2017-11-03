var products=[
    {
        name:'iphone X',
        price:'10000'
    },
    {
        name:'kindle',
        price:'999'
    }
]
module.exports={
    'GET /api/products':async(ctx,next)=>{
        ctx.response.type='application/json'
        ctx.response.body={
            products:products
        }
    }
}