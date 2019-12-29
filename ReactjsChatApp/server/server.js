const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = 4001
const app = express()
const server = http.createServer(app)

 /* create the websocket */
const io = socketIO(server)

io.on('connection', socket => {
  console.log('New client connected');
  
  /* send the messages to other users */ 
  socket.on('message', (data) => {
    socket.broadcast.emit('commingMsg', data);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
})
server.listen(port, () => console.log(`Listening on port 4001`))