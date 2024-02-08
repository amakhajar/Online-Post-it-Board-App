import express from 'express';
import { HelloRouteur } from './routes/hello.router';

const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const DIST_DIR = path.join(__dirname, "../../client/dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
app.listen(port, () => {
  process.stdout.write(`Server started on port: ${port}\n`);
});

app.use('/hello', HelloRouteur);

app.use(express.static(DIST_DIR));


app.get(['/', '/board/:boardId', '/board/:boardId/postit/:postitId'], (req, res) => {
  if (req.url.includes("bundle.js")) {
      res.sendFile(path.join(DIST_DIR, 'bundle.js'));
      return;
  }
  res.sendFile(HTML_FILE);
});