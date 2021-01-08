import { getIO } from './socket';

export const sendMessage = ({
  message,
  payload,
}: {
  message: string;
  payload: any;
}) => {
  if (!message || !payload) {
    throw new Error('Message and Payload are required values');
  }

  const io = getIO();

  io.emit(message, payload);
};
