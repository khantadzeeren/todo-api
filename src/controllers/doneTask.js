import Project from "../models/Project.js";


export const toggleTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Project.findOne({ id });
    await Project.findOneAndUpdate({ id }, { done: !task.done });
    return res.status(201).json({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error);
  }
};