const socketio = require('socket.io');

module.exports = (server) => {
  const io = socketio(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
};
