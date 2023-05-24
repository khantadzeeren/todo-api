import Project from "../models/Project.js"

export const GetAllTodo = async (req, res) => {
    const data = await Project.find();

    return res.status(200).json(data);
}

