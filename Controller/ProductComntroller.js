const Product = require('../Module/Product')


const InsertProduct = async (req, res) => {

    try {
        const { name, disc, img, category_id } = req.body
        console.log(req.body)
        const newproduct = await Product.InsertProduct(name, disc, img, category_id)
        return res.status(200).json(newproduct.rows)
    } catch (error) {
        return res.status(400).json(error)

    }



}

const GetProduct = async (req, res) => {
    try {
        const GetProducts = await Product.GetProduct()
        return res.status(200).json(GetProducts.rows)
    } catch (error) {

    }
}

const ProductID = async (req, res) => {


    try {
        const product_id = req.params.product_id
        const ProductIDs = await Product.ProductID(product_id)
        return res.status(200).json(ProductIDs.rows)
    } catch (error) {

    }

}

const AddImg = async (req, res) => {
    try {
        const id = req.params.id
        const { img } = req.body
        const Addimg = await Product.AddImg(id, img)

        return res.status(200).json(Addimg.rows)
    } catch (error) {

    }
}


module.exports = {
    InsertProduct,
    GetProduct,
    ProductID,
    AddImg
}