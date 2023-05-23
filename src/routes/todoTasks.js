import { Router } from "express";
import TodoModal from "../models/Project.js";
import { addTask } from "../controllers/addTask.js";

const router = Router();

router.post("", addTask)

router.get("", async (req, res) => {
  const allTodos = await TodoModal.find();
  res.status(200).json(allTodos);
});

router.delete("", async (req, res) => {
  const deleteItems = await TodoModal.findByIdAndDelete(req.params.id);
  res.status(200).json("Item deleted");
});

router.put("", async (req, res) => {
  const updateItem = await TodoModal.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  });

  res.status(200).json("Item updated");
});
export default router;