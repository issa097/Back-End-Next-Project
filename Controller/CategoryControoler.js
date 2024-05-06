const Category = require('../Module/Category')

const InsertCategory = async (req, res) => {
    try {
        const { cat_name } = req.body
        const newCategory = await Category.InsertCategory(cat_name)
        return res.status(200).json(newCategory.rows)
    } catch (error) {

    }
}
const GetCategory = async (req, res) => {
    try {
        const GetCategory = await Category.GetCategory()
        return res.status(200).json(GetCategory.rows)
    } catch (error) {

    }
}
const IDCategory = async (req, res) => {
    try {
        const category_id = req.params.category_id
        const IDCategory = await Category.IDCategory(category_id)
        return res.status(200).json(IDCategory.rows)
    } catch (error) {

    }
}

module.exports = {
    InsertCategory,
    GetCategory,
    IDCategory
}