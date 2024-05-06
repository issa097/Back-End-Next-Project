const express = require('express');
const app = express();
const cors = require("cors");
const UserRouter = require("./Routs/UserRouter");
const ProductRouter = require("./Routs/ProductRouter");
const CategoryRouter = require("./Routs/CategoryRouter");


app.use(cors())
app.use(express.json());
app.use(UserRouter)
app.use(ProductRouter)
app.use(CategoryRouter)
module.exports = app