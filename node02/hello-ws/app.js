const WebSocket=require('ws');
//引入websocket的Server类
const WebSocketServer=WebSocket.Server;
const wss=new WebSocketServer({
    port:3000
})
wss.on('connection',function(ws){
    console.log('SERVER connertion()')
    ws.on('message',function(message){
        console.log('接受到的消息是:'+message)
        ws.send('ECHO:'+message,(err)=>{
            if(err){
                console.log('err：'+err)
            }
        })
    })
})
let ws = new WebSocket('ws://localhost:3000');

// 打开WebSocket连接后立刻发送一条消息:
ws.on('open', function () {
    console.log(`[CLIENT] open()`);
    ws.send('Hello!');
});

// 响应收到的消息:
ws.on('message', function (message) {
    console.log(`响应收到的消息: ${message}`);
})
