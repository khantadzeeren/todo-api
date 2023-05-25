import Category from "../models/Category.js";

const GetAllCategories= async (req, res) => {
    const data = await Category.find();

    return res.status(200).json(data);
}

export default GetAllCategories
