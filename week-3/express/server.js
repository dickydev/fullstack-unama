const express = require('express');
const app = express();

// Data sementara
const books = [
  {
    id: 1,
    title: 'Belajar Javascript',
    author: 'Dicky F Sitepu',
    category: 'programming',
    stock: 5,
  },
  {
    id: 2,
    title: 'Belajar Express JS',
    author: 'Dicky F Sitepu',
    category: 'programming',
    stock: 100,
  },
];

const PORT = 3000;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello world');
});

// Static Route
app.get('/hello', (req, res) => {
  res.status(200).json({
    msg: 'Hello dari Kak Tia',
  });
});

app.get('/about', (req, res) => {
  res.status(200).json({
    msg: 'Page about..',
  });
});

app.get('/products/', (req, res) => {
  console.log(req.query);
  res.status(200).json({
    msg: 'Page product..',
    query: req.query,
  });
});

app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  console.log(id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      msg: 'id should be number',
    });
  }

  res.status(200).json({
    id: id,
  });
});

// TUGAS E-LIBRARY
app.get('/books', (req, res) => {
  res.status(200).json({
    message: 'success get all books',
    code: 200,
    data: books,
  });
});

app.get("/books/:id", (req, res) => {
  
})

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
