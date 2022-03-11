const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

http.createServer((req,serverRes)=>{
    if(req.method === 'GET' && req.url === '/posts'){
        https.get(url,(httpRes)=>{
            httpRes.on('data',data=>{
                httpRes.setEncoding('utf8');
                console.log(data);
                serverRes.write(data);
            });

            httpRes.on('end',()=>{
                serverRes.end();
                console.log('its over getting data from api');
            })
        });
    }
    else{
        serverRes.writeHead(404,{'Content-Type': 'text/plain'});
        serverRes.end('404 ERROR , could not find what you were looking for ')
    }
}).listen(4444);

console.log('Server is listening');