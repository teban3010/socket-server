import { Server } from 'http';

let io: any = null;

export const init = (httpServer: Server) => {
  io = require('socket.io')(httpServer);
  return io;
};

export const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
};
