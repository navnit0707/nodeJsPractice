const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    let body ='';
    if(req.method === 'GET'){
        console.log(req.method); // to check working or not
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./http-form.html','UTF-8',(err, data)=>{
            if(err) throw err;
            
            res.write(data);
            res.end();
            
        });
    }
    else if(req.method == 'POST'){
        req.on('data', (data)=>{
            body += data;
        });

        req.on('end',()=>{
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(body,()=>{
                res.end()
            });
        });
    }
    else{
        res.writeHead(404,{'Content-type':'text/html'});
        res.end('404, ERROR could not find')
    }
}).listen(4444);

console.log("its working");