import express from 'express';
import { PORT, HOST } from './config/server';
import DecryptionRoute  from './routes/decrypt';
import EncryptionRoute  from './routes/encrypt';
 
const app = express();

app.get('/', (req, res) => {
  res.writeHead(200);
  res.end("Default respond executed");
})

app.post('/encrypt', (req, res) => {
  EncryptionRoute(req, res);
})

app.post('/decrypt', (req, res) => {
  DecryptionRoute(req, res);
})

app.listen(PORT, `${HOST}`, (() => {
  console.log(`Server is listening at port ${PORT}`)
}))
