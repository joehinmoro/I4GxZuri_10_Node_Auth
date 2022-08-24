// IMPORTS
const { User } = require("../../models/userModel");
const { Product } = require("../../models/productModel");

// SEEDS
// user seeds
const users = [
    { email: "admin@mail.com", password: "abcABC123!", role: "admin" },
    { email: "manager@mail.com", password: "abcABC123!", role: "manager" },
    { email: "staff@mail.com", password: "abcABC123!", role: "staff" },
    { email: "user@mail.com", password: "abcABC123!", role: "user" },
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

//  add seed data
const seedAll = async () => {
    // clear user collection
    await User.deleteMany({});
    // clear product collection
    await Product.deleteMany({});
    // seed users
    for (const user of users) await User.signup(user.email, user.password, user.role);
    // seed products
    await Product.insertMany(products);
};

// EXPORTS
module.exports = { seedAll };
