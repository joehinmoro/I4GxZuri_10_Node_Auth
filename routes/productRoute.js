// IMPORTS
const router = require("express").Router();
const { userAuth } = require("../middleware/auth");
const {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    createProduct,
} = require("../controllers/productController");

// ROUTES
// auth
router.use(userAuth);
// index
router.get("/", getProducts);
// show
router.get("/:id", getProduct);
// create
router.post("/", createProduct);
// update
router.patch("/:id", updateProduct);
// delete
router.delete("/:id", deleteProduct);

// EXPORTS
module.exports = router;
