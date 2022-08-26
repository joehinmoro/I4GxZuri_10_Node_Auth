// IMPORTS
const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");

// MIDDLEWARE FUNCTIONS
const userAuth = async (req, res, next) => {
    // verify auth
    console.log(req.headers);
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ error: "unauthorized request" });

    const token = authorization.split(" ")[1];

    try {
        // verify token
        const { userID } = jwt.verify(token, process.env.SECRET);
        // query id and role of user
        const userRecord = await User.findById(userID).select("role");

        if (!userRecord) return res.status(400).json({ error: "authorization error" });
        req.role = userRecord.role;
        // console.log(req.role);
        next();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// EXPORTS
module.exports = { userAuth };
