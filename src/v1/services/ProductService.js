const Product = require("../models/Product");

const getAllProducts = () => {
    try {
        const allProducts = Product.getAllProducts();
        console.log("Test" + allProducts);
        return allProducts;
      } catch (error) {
        throw error;
      }
}

const getOneProduct = () => {
    return;
}

const createProduct = () => {
    return;
}

const updateProduct = () => {
    return;
}

const deleteProduct = () => {
    return;
}

module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}