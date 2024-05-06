const db = require('../DataBase/db')

async function InsertCategory(cat_name) {
    const queryText = "insert into category (cat_name) VALUES($1) RETURNING *"
    const value = [cat_name]
    return await db.query(queryText, value)
}
async function GetCategory() {
    const queryText = "SELECT * FROM category"
    return await db.query(queryText)
}
async function IDCategory(category_id) {
    const queryText = `SELECT products.*
    FROM products
    JOIN category ON products.category_id = category.category_id
    WHERE category.category_id=$1`
    const value = [category_id]
    return await db.query(queryText, value)
}



module.exports = {
    InsertCategory,
    GetCategory,
    IDCategory
}