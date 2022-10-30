const express = require("express");

const ProductConstroller = require("../controllers/ProductController");

const router = express.Router();

router.get('/', ProductConstroller.getAllProducts);

router.get('/:productId', ProductConstroller.getOneProduct);

router.post('/', ProductConstroller.createProduct);

router.patch('/:productId', ProductConstroller.updateProduct);

router.delete('/:productID', ProductConstroller.deleteProduct);

module.exports = router;