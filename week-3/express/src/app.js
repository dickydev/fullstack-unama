const express = require('express');

const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());
app.use(productRoutes);
app.use(userRoutes);

module.exports = app;
