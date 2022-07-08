const productModel = require('../models/productModel');

const create = async (name, quantity) => {
    let product = await productModel.searchByName(name);
    if (!product) {
    product = await productModel.createProduct(name, quantity);
    return {
      codigo: 201,
      message: product,
    };
    }
    return {
      codigo: 409,
      message: { message: 'Product already exists' },
  };
}; 

module.exports = {
  create
}