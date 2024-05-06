const db = require('../DataBase/db')
const products = "products"

async function InsertProduct(name, disc, img, category_id) {
    const queryText = `INSERT INTO public.${products} (name , disc,img,category_id) VALUES($1,$2,$3,$4) RETURNING * `
    const values = [name, disc, img, category_id]
    return await db.query(queryText, values)
}

async function GetProduct() {
    const queryText = `SELECT * FROM public.${products} `
    return await db.query(queryText)

}
async function ProductID(product_id) {
    const queryText = " SELECT * FROM products WHERE product_id= $1 "
    const value = [product_id]
    return await db.query(queryText, value)

}

async function AddImg(id, img) {
    const queryText = "UPDATE product SET img = COALESCE($2,img)WHERE id=$1"
    const value = [id, img]
    return await db.query(queryText, value)

}



module.exports = {
    InsertProduct,
    GetProduct,
    ProductID,
    AddImg
}