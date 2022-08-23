// IMPORTS
const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");

// jwt
const genToken = (payload) => jwt.sign(payload, process.env.SECRET, { expiresIn: "2d" });

// CONTROL FUNCTION
// login
const loginUser = async (req, res) => {
    // destructure email and password from req body
    const { email, password } = req.body;

    try {
        // attempt login
        const user = await User.login(email, password);
        if (user) {
            // generate login token
            const token = genToken({ user: user._id });
            // login
            res.status(200).json({ email, token });
        }

        //
    } catch (error) {
        res.status(400).json(error.message);
    }
};

// sign up
const signupUser = async (req, res) => {
    // destructure email and password from req body
    const { email, password, role } = req.body;

    try {
        // attempt login
        const user = await User.signup(email, password, role);
        if (user) {
            // generate login token
            const token = genToken({ user: user._id });
            // login
            res.status(200).json({ email, token });
        }

        //
    } catch (error) {
        res.status(400).json(error.message);
    }
};

// EXPORTS
module.exports = { loginUser, signupUser };
