import Project from "../models/Project.js";
import { v4 as uuidv4 } from "uuid";

export const addTask = async (req, res) => {
  console.log(req.body);
  const { todoTask, done } = req.body;

  const newTask = new Project ({
    todoTask,
    done,
    id: uuidv4(),
  });

  await newTask.save();
  return res.status(201).json({ message: "Task added successfully" });
};