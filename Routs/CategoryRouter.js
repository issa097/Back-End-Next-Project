const Express = require("express")
const Router = Express.Router()
const CategoryController = require("../Controller/CategoryControoler")



Router.post("/newcategory", CategoryController.InsertCategory)
Router.get("/getcategory", CategoryController.GetCategory)
Router.get("/idcategory/:category_id", CategoryController.IDCategory)





module.exports = Router