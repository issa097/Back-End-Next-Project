const express = require("express")
const router = express.Router()

const ProductController = require("../Controller/ProductComntroller")

router.post("/new", ProductController.InsertProduct)
router.get("/getproduct", ProductController.GetProduct)
router.get("/getproduct/:product_id", ProductController.ProductID)
router.post("/AddImg/:id", ProductController.AddImg)


module.exports = router;    