import { Router } from "express";
import {
  getTasks,
  getTask,
  createTasks,
  deleteTasks,
  updateTasks,
} from "../controller/tasks.controller.js";
 
const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", createTasks);
router.put("/tasks/:id", updateTasks);
router.delete("/tasks/:id", deleteTasks);

export default router;