// IMPORTS
require("dotenv").config();
const { HOST, PORT, DB_URI, PRIME_USER_ID, PRIME_PRODUCT_ID, SECRET } = process.env;
const express = require("express");
const { connect } = require("mongoose");
const { primeSeeds, seedAll } = require("./dev/seeds/seeder");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");

// APP SETTINGS
const app = express();

// GENERAL MIDDLEWARE
app.use(express.json());

// ROUTES
// root (redirect)
app.all("/", (req, res) => {
    res.redirect("/api/products");
});
// users
app.use("/api/user", userRoute);
// products
app.use("/api/products", productRoute);

// 404
app.use((req, res) => {
    res.status(404).json({ error: "not found" });
});

// DB CONNECTION AND SERVER LISTEN
const server = async () => {
    await connect(DB_URI);
    console.log("connected to database");
    await app.listen(PORT, HOST);
    await seedAll(PRIME_USER_ID, PRIME_PRODUCT_ID);
    // await primeSeeds();
    console.log("listening for request");
};
// start server
server();
