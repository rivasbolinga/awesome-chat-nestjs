import {
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer() //Get access to server
  server: Server;
  @SubscribeMessage('send-message')
  handleEvent(@MessageBody() data: string): void {
    console.log(data)
    this.server.emit('send-message');
    }
}
