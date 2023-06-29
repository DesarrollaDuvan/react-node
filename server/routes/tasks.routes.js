import { Router } from "express";
import {
  getTask,
  getTasks,
  createTasks,
  deleteTasks,
  updateTasks,
} from "../controller/tasks.controller";
 
const router = Router();

router.get("/tasks", getTask);
router.get("/tasks", getTasks);
router.post("/tasks:id", createTasks);
router.put("/tasks:id", updateTasks);
router.delete("/tasks:id", deleteTasks);

export default router;