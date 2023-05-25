import  express  from "express";
import GetAllCategories from "../controllers/category-controller.js";


const categoryRouter = express.Router()

categoryRouter.get("/categories" , GetAllCategories)

export default categoryRouter