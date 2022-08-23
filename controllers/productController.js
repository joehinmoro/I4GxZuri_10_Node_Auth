// IMPORTS
const mongoose = require("mongoose");
const { Product } = require("../models/productModel");

// CONTROL FUNCTIONS
// INDEX - GET
const getProducts = async (req, res) => {
    try {
        // query all product
        const products = await Product.find();
        // send response
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: { code: 500, message: "server error" } });
    }
};

// CREATE - POST
const createProduct = async (req, res) => {
    // verify role
    if (!["admin", "manager", "staff", "user"].includes(role))
        return res.status(401).json({ error: "unauthorized request" });
    try {
        // destructure from req body
        const { name, price, role } = req.body;
        // verify role
        if (!["admin", "manager", "staff"].includes(role))
            return res.status(401).json({ error: "unauthorized request" });
        // ensure non-empty fields
        const empty = [];
        if (!name) empty.push("name");
        if (!price) empty.push("price");
        if (empty.length > 1)
            return res.status(400).json({ error: "Please fill in all the fields", empty });

        //create
        const newProduct = await Product.create({ name, price });
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: { code: 500, message: "server error" } });
    }
};

// SHOW - GET
const getProduct = async (req, res) => {
    // verify role
    if (!["admin", "manager", "staff", "user"].includes(role))
        return res.status(401).json({ error: "unauthorized request" });
    try {
        // destructure product id from req params
        const { id } = req.params;
        // verify role
        if (!["admin", "manager", "staff"].includes(role))
            return res.status(401).json({ error: "unauthorized request" });

        // verify id is valid
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({ error: "invalid id" });

        // find single product
        const singleProduct = await Product.findById(id);
        if (!singleProduct) return res.status(404).json({ error: "product not found" });

        // send single product
        res.status(200).json(singleProduct);
        //
    } catch (error) {
        res.status(500).json({ error: { code: 500, message: "server error" } });
    }
};

const updateProduct = async (req, res) => {
    // verify role
    if (!["admin", "manager"].includes(role))
        return res.status(401).json({ error: "unauthorized request" });
    try {
        // destructure product id from req params
        const { id } = req.params;

        // verify id is valid
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({ error: "invalid id" });

        // find single product and update
        const singleProduct = await Product.findByIdAndUpdate(id, { ...req.body }, { new: true });
        //
        if (!singleProduct) return res.status(404).json({ error: "product not found" });
        // send single product
        res.status(200).json(singleProduct);
    } catch (error) {
        res.status(500).json({ error: { code: 500, message: "server error" } });
    }
};

const deleteProduct = async (req, res) => {
    // verify role
    if (!["admin"].includes(role)) return res.status(401).json({ error: "unauthorized request" });
    try {
        // destructure product id from req params
        const { id } = req.params;

        // verify id is valid
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({ error: "invalid id" });

        // find single product and delete
        const singleProduct = await Product.findByIdAndDelete(id, { ...req.body });
        //
        if (!singleProduct) return res.status(404).json({ error: "product not found" });
        // send single product
        res.status(200).json(singleProduct);
    } catch (error) {
        res.status(500).json({ error: { code: 500, message: "server error" } });
    }
};

// EXPORTS
module.exports = { getProduct, getProducts, updateProduct, createProduct, deleteProduct };
