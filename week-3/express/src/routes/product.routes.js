const express = require('express');

const productController = require('../controllers/product.controller');

const router = express.Router();

// getAllProducts
router.get('/products', productController.getAllProducts);
// getProductById
router.get('/products/:id', productController.getProductById);
// createProduct
router.post('/products', productController.createProduct);
// updateProducts
router.put('/products/:id', productController.updateProduct);
// deleteProduct
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
