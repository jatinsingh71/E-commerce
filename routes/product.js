const productController = require('../controllers/product');

const router = require('express').Router();

router.get('/products', productController.getProducts);

router.get('/product/:id', productController.getProduct);

router.get('/add-product', productController.getAddProduct);

router.post('/add-product', productController.postAddProduct);

router.get('/edit-product/:id', productController.getEditProduct);

router.post('/edit-product/:id', productController.postEditProduct);

module.exports = router;