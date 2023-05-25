import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/todoTasks.js";
import swaggerMiddleware from "./middlewares/swagger.js";


dotenv.config();
connect();



const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", router);

app.use("/", ... swaggerMiddleware() );

app.listen(3000);
