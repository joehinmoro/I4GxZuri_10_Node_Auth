// IMPORTS
const { Schema, model } = require("mongoose");

// SCHEMA
const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            min: [0, "price must be positive"],
        },
    },
    { timestamps: true }
);

// MODEL
module.exports.Product = model("Product", productSchema);
