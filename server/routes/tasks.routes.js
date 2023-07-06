import { Router } from "express";
//Se estan importando todas la variables del tasks.controller
import {
  getTasks,
  getTask,
  createTasks,
  deleteTasks,
  updateTasks,
} from "../controller/tasks.controller.js";

 
const router = Router();

//Se esta capturando los valores por URL y lo esta conectando con el controlador
router.get("/tasks", getTasks);//Se esta haciendo consulta de toda la tabla de BD
router.get("/task/:id", getTask);//Se esta haciendo la consulta individual de la BD
router.post("/tasks", createTasks);//Se esta creando cliente en la BD
router.put("/tasks/:id", updateTasks);//Se esta actualizando los datos del cliente en la BD
router.delete("/tasks/:id", deleteTasks);//este sirve para eliminar cliente de la BD

export default router;