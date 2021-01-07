// import { Socket } from 'dgram';
// import { Socket, Server} from 'socket.io';
// import { v4 as uuidv4 } from 'uuid';

// const messageExpiration = 10 * 1000;

// export interface IUser {
//   id: string;
//   name: string;
// }

// const defaultUser: IUser = {
//   id: 'anon',
//   name: 'anonymous'
// }

// export interface IMessage {
//   user: IUser;
//   id: string;
//   time: Date;
//   value: string;
// }

// const sendMessage = (socket: Socket | Server ) => (message: IMessage) => socket.emit("message", message)

// export default (io: Server) => {
//   const messages: Set<IMessage> = new Set();
  
//   io.on("connection", (socket) => {
//     socket.on("getMessages", () => {
//       messages.forEach(sendMessage(socket))
//     })
//     socket.on("message", )
//   })

// }