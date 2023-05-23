import Project from "../models/Task.js";

export const removeTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    await Project.deleteOne({ id: taskId });
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error deleting task" });
  }
};