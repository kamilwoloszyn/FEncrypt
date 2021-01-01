import socketio from "socket.io";
import { PORT } from "./config/server";
import EncryptionRoute from './routes/EcryptionRoute';
import DecryptionRoute from './routes/DecryptionRoute';

const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http)

io.on("connection", function (socket : socketio.Socket) { 
  socket.on("data-client", (data: {file :Buffer, password: string, context:string}) => {
    if (data.file.length > 0 && data.password.length > 5 && data.context.length > 0)  { 
      switch (data.context) { 
        case "encrypt": {
           EncryptionRoute(data.password,data.file)
        }
        break;
        case "decrypt": {
           DecryptionRoute(data.password,data.file)
        }
        break;
        default: {
          // send 400 (Bad request)
        }
        }
    } else { 
      //send respond to client that request is not complete
      }
  })
})

http.listen(process.env.PORT || PORT, function () {
   console.log(`App now listening at port *.${process.env.PORT || PORT}`)
})