import socketio from "socket.io";
import { PORT } from "./config/server";
import EncryptionRoute from './routes/EcryptionRoute';
import DecryptionRoute from './routes/DecryptionRoute';

const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http)

io.on("connection", function (socket : socketio.Socket) { 
  socket.on("data-client", (data: { file: Buffer, password: string, context: string, iv?: string }) => {
    let socketId = socket.id
    if (data.file.length > 0 && data.password.length > 5 && data.context.length > 0) {
      switch (data.context) {
        case "encrypt": {
          EncryptionRoute(data.password, data.file).then((data) => {
            io.to(socketId).emit('server-response', {
              statusCode: 200,
              message: {
                str: "All ok"
              },
              buffer: data.buf,
              iv:data.iv
            })
          }).catch((err) => {
            io.to(socketId).emit('server-response', {
              statusCode: 500,
              message: {
                str: "Internal server error"
              }
            })
           })
        }
          break;
        case "decrypt": {
          if (data.iv) {
            DecryptionRoute(data.password, data.file, data.iv).then((buf) => {
              io.to(socketId).emit('server-response', {
                statusCode: 200,
                message: {
                  str: "All ok"
                },
                buffer: buf
              })
            }).catch((err) => {
              io.to(socketId).emit('server-response', {
                statusCode: 500,
                message: {
                  str: "Internal server error"
                }
              })
            })
          } else {
            io.to(socketId).emit('server-response', {
              statusCode: 400,
              message: {
                str: "IV is empty"
              }
            })
          }
        }
          break;
        default: {
          io.to(socketId).emit('server-response', {
            statusCode: 400,
            message: {
              str:"Bad action context"
            }
          })
          }
      }

    } else {
      io.to(socketId).emit('server-response', {
        statusCode: 400,
        message: {
          str: "400 Bad request"
        }
      })
    }
  })

})

http.listen(process.env.PORT || PORT, function () {
   console.log(`App now listening at port *.${process.env.PORT || PORT}`)
})

//TODO:
// - Move some code to routes (cleanup)