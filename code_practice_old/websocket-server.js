const WebSocketServer  = require('ws').Server;
const WSS = new WebSocketServer({port:3232});
socket.binaryType = "arraybuffer";

WSS.on('connection',(ws)=>{
    ws.on('message',(message)=>{


        if(message === 'close'){
            ws.close();
        }
        else{
            WSS.clients.forEach((client)=>{
                client.send(message);
            });
        }
    });


    console.log('we are connected');
});