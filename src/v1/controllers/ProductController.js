const Product = require("../models/Product");

const getAllProducts = (req, res) => {
    Product.getAllProducts((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error ocurred while retrieving customers.",
            });
        } else {
            res.status(200).send({ status: "Fetched", data: data });
        }
    });
};

const getOneProduct = (req, res) => {
    Product.getOneProduct(req.params.productId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.productId}.`,
                });
            } else {
                res.status(500).send({
                    message:
                        "Error retrieving Customer with id " +
                        req.params.productId,
                });
            }
        } else {
            res.send({ status: "OK", product: data });
        }
    });
};

const createProduct = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    // Create a Product
    const product = new Product({
        name: req.body.name,
    });

    Product.createProduct(product, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while creating the Customer.",
            });
        else res.status(201).send({ status: "Created", data: data });
    });
};

const updateProduct = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    Product.updateProduct(
        req.params.productId,
        new Product(req.body),
        (err, data) => {
            console.log(req.body);
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found product with id ${req.params.customerId}.`,
                    });
                } else {
                    res.status(500).send({
                        message:
                            "Error updating Customer with id " +
                            req.params.productId,
                    });
                }
            } else res.status(200).send({ status: "Updated", data: data });
        }
    );
};

const deleteProduct = (req, res) => {
    Product.deleteProduct(req.params.productId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Product with id ${req.params.productId}.`,
                });
            } else {
                res.status(500).send({
                    message:
                        "Could not delete Product with id " +
                        req.params.productId,
                });
            }
        } else res.send({ message: `Product was deleted successfully!` });
    });
};

module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
