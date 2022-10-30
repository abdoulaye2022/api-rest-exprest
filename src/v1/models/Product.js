const cn = require('../../database/db');


const getAllProducts = () => {
  let sql = "SELECT * FROM products";

  try {
    cn.query(sql, (err, result) => {
      if (err) throw err;

      return result;
    });
  } catch (error) {
    throw { status: 500, message: error };
  }
}

const getOneProduct = () => {

}

const createProduct = () => {

}

const updateProduct = () => {

}

const deleteProduct = () => {

}

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct
};