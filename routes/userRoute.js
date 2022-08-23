// IMPORTS
const router = require("express").Router();
const { loginUser, signupUser } = require("../controllers/userController");

// ROUTES
// login
router.post("/login", loginUser);
// signup
router.post("/signup", signupUser);

// EXPORTS
module.exports = router;
