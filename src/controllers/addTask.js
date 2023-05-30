import Project from "../models/Project.js";
import { v4 as uuidv4 } from "uuid";
import addTaskSchema from "../schemas/add-task-schema.js";

export const addTask = async (req, res) => {
  const {body} = req;
  
  const validator = await addTaskSchema(body);
  const {value, error} = validator.validate(body);

  if (error) {
    return res.status(401).json(error.details);
  }

  const {item, completed, id} =value;
 
   

  await Project.create({
    item,
    completed,
    id,
  
  });

  return res.status(201).json({message: "task created successfully"});
};