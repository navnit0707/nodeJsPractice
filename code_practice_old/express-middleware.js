const express = require('express');
let app = express();

app.use('/css',express.static(__dirname + '/public'));
app.use((req,res,next)=>{
    console.log('middleware');
    next();
});

app.get('/',(req,res)=>{
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body>
    <h1>Hello Navnit
    </h1>
</body>
</html>
    `);
});
app.listen(9999);
console.log('its working');