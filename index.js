const express = require('express');
const app = express();
const cors = require("cors");
const UserRouter = require("./Routs/UserRouter");
const ProductRouter = require("./Routs/ProductRouter");


app.use(cors())
app.use(express.json());
app.use(UserRouter)
app.use(ProductRouter)
module.exports = app