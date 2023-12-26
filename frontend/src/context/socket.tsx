/**
 * Socket instance connection
 */
import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

const baseApiUri = process.env.REACT_APP_BASE_API_URI!;

export const socket: Socket = io(baseApiUri);
socket.connect();

export const SocketContext = createContext(socket);
