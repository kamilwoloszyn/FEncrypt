import express,{Express} from 'express';
import bodyParser from 'body-parser';
import * as  http from 'http';
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
  res.end("Default text/plain document");
})

io.on("connection", (socket: any) => {
    console.log("Socket.io")
    //handle later
})

const server = httpServer.listen(process.env.PORT || PORT, (() => {
  console.log(`Listening on *:${process.env.PORT || PORT}`)
}))
