import express from 'express';
import { HelloRouteur } from './routes/hello.router';
import { Server } from 'socket.io';


const http = require('http');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const DIST_DIR = path.join(__dirname, "../../client/dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const server = http.createServer(app);
const io = new Server(server);

app.use('/hello', HelloRouteur);

app.use(express.static(DIST_DIR));

app.get(['/', '/board/:boardId', '/board/:boardId/postit/:postitId'], (req, res) => {
  if (req.url.includes("bundle.js")) {
      res.sendFile(path.join(DIST_DIR, 'bundle.js'));
      return;
  }
  res.sendFile(HTML_FILE);
});



server.listen(port, () => {
  process.stdout.write(`Server started on port: ${port}\n`);
});


// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('event', function(data) {
   
//     console.log(data);
//     socket.broadcast.emit('event',data);
   
//   });
 
// });

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('my action',  (action)=>{
    console.log(action);
    action.new=false;
    socket.broadcast.emit('my action',action);
  });
});


