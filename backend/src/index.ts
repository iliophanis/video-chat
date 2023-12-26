import app from './app';
import http from 'http';
// import { Server } from 'socket.io';
import createSocket from './socket';
import { Request, Response } from 'express';

let port = process.env.PORT;
if (port === null) {
  port = '5001';
}

/*
 * Create HTTP server
 */
const server = http.createServer(app);

app.get('/', function (req: Request, res: Response) {
  res.json('server Listening!');
});

/*
 * Create and connect socket.io server
 */
createSocket(server);

server.listen(Number(port), () => {
  console.log('Server listening on port ', port);
});
