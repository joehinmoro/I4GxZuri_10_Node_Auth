// IMPORTS
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// MIDDLEWARE FUNCTIONS
const userAuth = async (req, res, next) => {
    // verify auth
    const { authorization } = req.header;

    if (!authorization) return res.status(401).json({ error: "unauthorized request" });

    const token = authorization.split(" ")[1];

    try {
        // verify token
        const { _id } = jwt.verify(token, SECRET);
        // query id and role of user
        req.role = await User.findByID(_id).select("role");
        next();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const isAdminAbove = (role) => {
    if (["admin"].includes(role)) return true;
    return false;
};

// EXPORTS
module.exports = { userAuth };
