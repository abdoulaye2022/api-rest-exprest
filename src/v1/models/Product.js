const cn = require("./db");

// constructor
const Product = function (product) {
    this.name = product.name;
};

Product.getAllProducts = (result) => {
    cn.query("SELECT * FROM products", (err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

Product.getOneProduct = (productId, result) => {
    cn.query(`SELECT * FROM products WHERE id = ${productId}`, (err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        result({ kind: "Not found" }, res);
    });
};

Product.createProduct = (newProduct, result) => {
    cn.query("INSERT INTO products SET ?", newProduct, (err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        result(null, { id: res.id, ...newProduct });
    });
};

Product.updateProduct = (productId, product, result) => {
    cn.query(
        "UPDATE `products` SET `name`= ? WHERE id = ?",
        [product.name, productId],
        (err, res) => {
            if (err) {
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }

            result(null, {id: productId, name: product.name });
        }
    );
};

Product.deleteProduct = (productId, result) => {
    cn.query("DELETE FROM products WHERE id = ?", productId, (err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        result(null, res);
    });
};

module.exports = Product;
