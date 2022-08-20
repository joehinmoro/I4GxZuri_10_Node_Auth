// IMPORTS
require("dotenv").config();
const { HOST, PORT, DB_URI, PRIME_USER_ID, PRIME_PRODUCT_ID } = process.env;
const express = require("express");
const { connect } = require("mongoose");
const { primeSeeds, seedAll } = require("./dev/seeds/seeder");

// APP SETTINGS
const app = express();

// GENERAL MIDDLEWARE
app.use(express.json());

// ROUTES

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
