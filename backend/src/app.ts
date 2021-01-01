import express,{Express} from 'express';
import bodyParser from 'body-parser';
import * as  http from 'http';
import * as socketio from 'socket.io';
import { PORT, HOST } from './config/server';
import DecryptionRoute  from './routes/decrypt';
import EncryptionRoute  from './routes/encrypt';

const app: Express = express();
app.set("port", process.env.PORT || PORT);

let httpServer: http.Server = http.createServer(app);
let io: any = require("socket.io")(httpServer)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.writeHead(200);
  res.end("Default respond executed");
})

app.post('/encrypt', (req, res) => {
  EncryptionRoute(req, res);
})

io.on("connection", (socket: any) => {
    console.log("Socket.io")
    //handle later
})

app.post('/decrypt', (req, res) => {
  DecryptionRoute(req, res);
})

const server = httpServer.listen(process.env.PORT || PORT, (() => {
  console.log(`Listening on *:${process.env.PORT || PORT}`)
}))
