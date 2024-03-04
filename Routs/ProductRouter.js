const express = require("express")
const router = express.Router()

const ProductController = require("../Controller/ProductComntroller")

router.post("/new", ProductController.InsertProduct)
router.get("/getproduct", ProductController.GetProduct)
router.get("/getproduct/:id", ProductController.ProductID)


module.exports = router;    