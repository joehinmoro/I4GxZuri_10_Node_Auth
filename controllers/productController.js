// IMPORTS
const mongoose = require("mongoose");
const { Product } = require("../models/productModel");

// CONTROL FUNCTIONS
const getProducts = async (req, res) => {
    // query all product
    const products = await Product.find();
};
