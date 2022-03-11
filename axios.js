const axios = require('axios');
let username = 'navnit0707';

axios.get('https://api.github.com/users/' + username).then((res)=>{
    console.log(res.data);
}).catch((err)=>{
    console.log(err);
});