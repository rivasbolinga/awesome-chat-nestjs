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
  handleEvent(
    @MessageBody() data: string, // extract message from payload
    @ConnectedSocket() client: Socket,
  ): void {
    this.server.emit
    console.log(data)
  }
}
