import { SubscribeMessage, MessageBody, ConnectedSocket, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()

export class EventsGateway {
  @WebSocketServer()
  server: Server;
  // @SubscribeMessage('send-message')
  // handleEvent(
  //   @MessageBody() data: string,
  //   @ConnectedSocket() client: Socket,
  // ): string {
  //   return data;
  // }
}
