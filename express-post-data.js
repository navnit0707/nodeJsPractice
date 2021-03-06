const express = require('express');
const bodyParser = require('body-parser');

let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); //to know more

app.use('/assets',express.static(__dirname + '/public'));


app.use((req,res,next)=>{
    console.log('MiddleWare');
    next();
});

app.post('/post',(req,res)=>{
    console.log(req.body);
});

app.listen(9999);