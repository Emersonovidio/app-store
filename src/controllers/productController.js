const express = require('express');
const models = require('../models/productModel');
const productService = require('../services/productService');

const product = express.Router();

product.post('/', async (req, res) => {
    const { name, quantity } = req.body;

    const product = await productService.create(name, quantity);
    res.status(201).json(product);
})


module.exports = product;
