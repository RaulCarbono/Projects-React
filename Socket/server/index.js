import express from 'express' 
import http from 'http'
import {Server as SocketServer} from 'socket.io'

const app = express() 
const server = http.createServer(app)
const io = new SocketServer(server, {
    cors: {
        origin: "http://localhost:5174"
    }
    })

    

io.on('connection', socket => {
    console.log('Client conneted', socket.id)

    socket.on('message', (body) => {
        socket.broadcast.emit('message',{
            body,
            from:socket.id.slice(6)
        })
    })
})

server.listen(3002)
console.log('Server on port', 3002)