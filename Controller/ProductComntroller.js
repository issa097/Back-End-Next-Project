const Product = require('../Module/Product')


const InsertProduct = async (req, res) => {

    try {
        const { name, disc } = req.body
        console.log(req.body)
        const newproduct = await Product.InsertProduct(name, disc)
        return res.status(200).json(newproduct.rows)
    } catch (error) {
        return res.status(400).json(error)

    }



}

const GetProduct = async (req, res) => {
    try {
        const GetProducts = await Product.GetProduct()
        console.log(GetProduct)
        return res.status(200).json({ aaa: GetProducts.rows })
    } catch (error) {

    }
}

const ProductID = async (req, res) => {


    try {
        const id = req.params.id
        const ProductIDs = await Product.ProductID(id)
        return res.status(200).json(ProductIDs.rows)
    } catch (error) {

    }

}


module.exports = {
    InsertProduct,
    GetProduct,
    ProductID
}