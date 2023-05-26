import Category from "../models/Category.js";

const GetAllCategories= async (req, res) => {
    const data = await Category.find();
    const newData = data.map(category => {
        return {
            id: category.id,
            name: category.name,
            
        }
    })
    return res.status(200).json(newData);
}

export default GetAllCategories
