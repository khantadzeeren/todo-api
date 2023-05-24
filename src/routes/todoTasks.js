import { Router } from "express";
import TodoModal from "../models/Project.js";
import { addTask } from "../controllers/addTask.js";
import { removeTask } from "../controllers/removeTask.js";
import { GetAllTodo } from "../controllers/project-controller.js";
import { toggleTask } from "../controllers/doneTask.js";

const router = Router();

router.post("/api/item", addTask)

router.get("/api/items", GetAllTodo);

router.delete("/api/item/:id", removeTask);

router.put("/api/item/:id", toggleTask );

 
export default router;