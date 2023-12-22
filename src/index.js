const express =require('express');

const app= express();

const http = require('http');

const server = http.createServer(app);

const { Server } =require('socket.io');

const io =new Server(server);

const { serverConfig }= require('./config');

app.use(express.static(__dirname+ '/public'));

app.get('/',(req,res)=>{
    res.sendFile('/index');
})

io.on('connection',(socket)=>{
    socket.on('newMessage',(data)=>{
        console.log(data);
        socket.emit('reply',data);
    })
})
server.listen(serverConfig.PORT,()=>{
    console.log(`Successfully Started the Server on PORT ${serverConfig.PORT}`);
})