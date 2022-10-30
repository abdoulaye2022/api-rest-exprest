const ProductService = require("../services/ProductService");

const getAllProducts = (req, res) => {
    const allProducts = ProductService.getAllProducts();
    res.send({ status: "OK", products: allProducts});
}

const getOneProduct = (req, res) => {
    res.send("Get one product");
}

const createProduct = () => {
    res.send("Create product");
}

const updateProduct = (req, res) => {
    res.send("Update product");
}

const deleteProduct = (req, res) => {
    res.send("delete product");
}

module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
};