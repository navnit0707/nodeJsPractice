const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    console.log(req.method);

    if(req.url === '/'){
        fs.readFile('global.html','UTF-8',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        });
    }
    else if(req.url === '/about'){
        fs.readFile('about.html','UTF-8',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        });
    }
}).listen(3300);