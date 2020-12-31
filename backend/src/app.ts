import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.writeHead(200);
  res.end("Default respond executed");
})

app.listen(port, "localhost", (() => {
  console.log(`Server is listening at port ${port}`)
}))
