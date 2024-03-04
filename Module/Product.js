const db = require('../DataBase/db')


async function InsertProduct(name, disc) {
    const queryText = "INSERT INTO product (name , disc) VALUES($1,$2) RETURNING *"
    const values = [name, disc]
    return await db.query(queryText, values)
}

function GetProduct() {
    const queryText = "SELECT * FROM product"
    return db.query(queryText)

}
async function ProductID(id) {
    const queryText = " SELECT * FROM product WHERE id= $1 "
    const value = [id]
    return await db.query(queryText, value)

}



module.exports = {
    InsertProduct,
    GetProduct,
    ProductID
}