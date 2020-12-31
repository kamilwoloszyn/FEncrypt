import express from 'express';
import { PORT, HOST } from './config/server';

const app = express();

app.get('/', (req, res) => {
  res.writeHead(200);
  res.end("Default respond executed");
})

app.listen(PORT, `${HOST}`, (() => {
  console.log(`Server is listening at port ${PORT}`)
}))
