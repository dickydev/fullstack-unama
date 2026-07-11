const ProductModel = require('../models/product.model');

const getAllProducts = (req, res) => {
  const products = ProductModel.getAll();

  res.status(200).json({
    code: 200,
    message: 'Success get all products',
    data: products,
  });
};

const getProductById = (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      code: 400,
      message: 'Product ID Must be a number',
    });
  }

  const product = ProductModel.getById(id);

  if (!product) {
    return res.status(404).json({
      code: 404,
      message: 'Product not found',
    });
  }

  res.status(200).json({
    code: 200,
    message: `Success get product with id : ${id}`,
    data: product,
  });
};

const createProduct = (req, res) => {
  const { name, price, stock } = req.body;

  if (!name) {
    return res.status(400).json({
      code: 400,
      message: 'Name required',
    });
  }
  if (typeof price !== 'number' && !price) {
    return res.status(400).json({
      code: 400,
      message: 'Price should be number and it is required',
    });
  }
  if (typeof stock !== 'number' && !stock) {
    return res.status(400).json({
      code: 400,
      message: 'Stock should be number and it is required',
    });
  }

  const newProduct = ProductModel.create({
    name: name,
    price: price,
    stock: stock,
  });

  res.status(201).json({
    code: 201,
    message: 'Product created successfully',
    data: newProduct,
  });
};

const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const { name, price, stock } = req.body;

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'Product ID Must be a number',
    });
  }

  if (!name) {
    return res.status(400).json({
      code: 400,
      message: 'Name required',
    });
  }
  if (!price && typeof price !== 'number') {
    return res.status(400).json({
      code: 400,
      message: 'Price required and should be a number',
    });
  }
  if (!stock && typeof stock !== 'number') {
    return res.status(400).json({
      code: 400,
      message: 'Stock required and should be a number',
    });
  }

  const updatedProduct = ProductModel.update(id, {
    name: name,
    price: price,
    stock: stock,
  });

  if (!updatedProduct) {
    return res.status(404).json({
      code: 404,
      message: 'Product not found ',
    });
  }

  res.status(200).json({
    code: 200,
    message: 'Product updated successfully',
    data: updatedProduct,
  });
};

const deleteProduct = (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      code: 400,
      message: 'Product ID Must be a number',
    });
  }

  const deletedProduct = ProductModel.remove(id);

  if (!deletedProduct) {
    return res.status(404).json({
      code: 404,
      message: 'Product not found',
    });
  }

  res.status(200).json({
    code: 200,
    message: 'Product deleted successfully',
    data: deletedProduct,
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
