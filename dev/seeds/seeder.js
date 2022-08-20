// IMPORTS
const mongoose = require("mongoose");
const { User } = require("../../models/userModel");
const { Product } = require("../../models/productModel");

// SEEDS
// user seeds
const users = [
    { email: "thorodinson@thundermail.com", password: "l1ght3n1ng5tr1k3", role: "admin" },
    { email: "tonystark@shield.com", password: "n3w3l3m3nt", role: "manager" },
    { email: "brucebanner@greenmail.com", password: "AlwaY5AngrY", role: "staff" },
    { email: "steverodgers@patriotmail.com", password: "5up3r5t3r01d", role: "user" },
];

// product seeds

const products = [
    { name: "Hawkeye's Bow", price: 50 },
    { name: "Berserker Staff", price: 120 },
    { name: "War Machine Armor", price: 350 },
    { name: "The Monolith", price: 560 },
    { name: "The Winter Solider's Arm", price: 90 },
    { name: "Pym Particles", price: 150 },
];

// add prime seeds (once)
const primeSeeds = async function () {
    await User.insertMany([
        {
            email: "thanos@snapmail.com",
            password: "purpl3buTT",
            role: "admin",
        },
    ]);

    await Product.create({
        name: "The Infinity Gauntlet",
        price: 750,
    });
};

//  add seed data
const seedAll = async (userID, productID) => {
    // clear user collection
    const clearUser = await User.deleteMany({ _id: { $ne: userID } });
    // clear product collection
    const clearProduct = await Product.deleteMany({ _id: { $ne: productID } });
    // seed users
    const seedUser = await User.insertMany(users);
    // seed products
    const primeProduct = await Product.insertMany(products);
};

// EXPORTS
module.exports = { primeSeeds, seedAll };
