import socketio from "socket.io";
import { PORT } from "./config/server";

const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http)

io.on("connection", function (socket : socketio.Socket) { 
  console.log("Connected");
})

http.listen(process.env.PORT || PORT, function () {
   console.log(`App now listening at port *.${process.env.PORT || PORT}`)
})