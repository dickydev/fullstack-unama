const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/hello', (req, res) => {
  res.status(200).json({
    msg: 'Hello dari Kak Tia',
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
