const WS = new WebSocket('ws://localhost:3232');

WS.onmessage=(payload)=>{
    console.log(payload.data);
};

WS.onopen = ()=>{
    displayTitle('connected to server');
    console.log('Connection is open');
};

function displayTitle(title){
    document.querySelector('h1').innerHTML = title;
}

WS.onclose =()=>{
    console.log('connection closed');
}
document.forms[0].onsubmit = ()=>{
   let input =  document.getElementById('message');
    console.log(input.value);
    WS.send(input.value);
};