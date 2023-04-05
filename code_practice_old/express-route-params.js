const express = require('express');

let app = express();

app.get('/',(req,res)=>{
    res.send('<p>Home</p>');
});
app.get('/post/:id/category/:category_id',(req,res)=>{
    res.send(`<p>Here is ${req.params.id}</p>
    
    <p>Here is ${req.params.category_id} </p>
    `);
    
});
app.listen(9999);