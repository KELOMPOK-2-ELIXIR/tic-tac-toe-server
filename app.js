const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = require('socket.io')(server)
// const Controller = require('./controllers/controller');
// const { User } = require('./models/index');
const router = require('./routes/index')

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(router)

let users = [];
let moves = [];
let messages=[];

io.on('connection', (socket) => {
    console.log('User Connected')
    //// get connect user data
    socket.on('user-connect', (data) => {
        users.push(data)
        io.emit('user-connect', users)
    })
    ///// 
    socket.on('room-enter', (data) => {

    })

    socket.on('move', (data) => {
        moves.push()
    })
    socket.on('send-message', function(data) {
        console.log('entered server, received', data)
        messages.push(data)
        // if (messages.length > 7){
        //     messages.shift()
        // }
        console.log(messages)
        io.emit('send-message', messages)
    })

})

server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})