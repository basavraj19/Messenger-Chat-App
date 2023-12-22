var hamburgerIcon = document.getElementById('btn');
let userWindow = document.getElementById('user-window');
var socket = io();

hamburgerIcon.addEventListener('click', () => {

    socket.emit('Hi', {
        message: "Basavraj Here"
    })
    if (userWindow.style.display == 'block') {
        userWindow.style.display = 'none';

    } else {
        userWindow.style.display = 'block';
    }
})

let newMessage = document.getElementById('new-message');
let button =document.getElementById('send');

button.addEventListener('click',()=>{
    let data= newMessage.value;
    console.log(data);
    socket.emit('newMessage',data);
    socket.on('reply',(data)=>{
        let userlist = document.getElementById('incomming');
        let p=document.createElement('p');
        p.innerHTML=data;
        userlist.appendChild(p);
    })
    newMessage.value="";
})