import express from 'express';
import path from 'path';

const app = express();
const distPath = path.resolve(__dirname, '..', 'dist');

app.listen(3003, () => {
  console.log('listening on 3003');
});

app.use(express.static(distPath));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
