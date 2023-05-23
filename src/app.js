import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import cors from "cors";
import { GetAllTodo } from "./controllers/project-controller.js";
import { addTask } from "./controllers/addTask.js";
import { toggleTask } from "./controllers/doneTask.js";
import { removeTask } from "./controllers/removeTask.js";

dotenv.config();
connect();

const app = express();

app.use(express.json());

app.use(cors());



// app.get(, GetAllTodo);

// app.post(, addTask);

// app.patch(, toggleTask);

// app.delete(, removeTask);

app.listen(3000);