// socket-server.ts
import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*", // Adjust CORS settings for production
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message', (msg: string) => {
    console.log('message received:', msg);
    io.emit('message', msg); // Broadcast message to all clients
  });
});

server.listen(4000, () => {
  console.log('Socket.IO server running on http://localhost:4000');
});
