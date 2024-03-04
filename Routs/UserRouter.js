const express = require("express")
const router = express.Router()

const loginController = require("../Controller/UserController")

router.post("/register", loginController.newUser)
router.post("/login", loginController.login)


module.exports = router;