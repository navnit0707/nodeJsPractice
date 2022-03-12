const WS = new WebSocket('ws://localhost:3232');

WS.onmessage=(payload)=>{
     displayMessage(payload.data);
};

WS.onopen = ()=>{
    displayTitle('connected to server');
    
};
function displayTitle(title){
    document.querySelector('h1').innerHTML = title;
}
function displayMessage(message){
    let h1 = document.createElement('h1');

    h1.innerHTML = message;
    document.querySelector('div.message').appendChild(h1);
}

WS.onclose =()=>{
    console.log('connection closed');
}
document.forms[0].onsubmit = ()=>{
   let input =  document.getElementById('message');
    console.log(input.value);
    WS.send(input.value);
};