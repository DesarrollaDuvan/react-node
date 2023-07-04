import pkg from "express/lib/response.js";
const { status } = pkg;
import { pool } from "../db.js";

//En esta funcion se esta haciendo la consulta de todos los clientes en la base de datos
export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM cliente");
    res.json(result);
  } catch (error) {
    return res, status(500).json({ message: "error de conexion" });
  }
};
//Se esta haciendo consulta idividual por el ID que le pasen por params
export const getTask = async (req, res) => {
<<<<<<< HEAD
  try {
    const [result] = await pool.query("SELECT * FROM cliente WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
=======
  const [result] = await pool.query("SELECT * FROM cliente WHERE id = ?", [
    req.params.id,
  ]);
  //si no se encuentra nada con el ID  que nos mandan se manda un 404
  if (result.length === 0) {
    return res.status(404).json({ message: "Task not found" });
  }
>>>>>>> ad5ab80fcbe3b4622043aff26379e5774aaed5a1

    res.json(result[0]);
  } catch (error) {
    return res, status(500).json({ message: "error de conexion" });
  }
};

//Se esta insertando nuvos clientes en la base de datos
export const createTasks = async (req, res) => {
<<<<<<< HEAD
  try {
    const { nombre, apellido, edad } = req.body;
    const [results] = await pool.query(
      "INSERT INTO cliente( nombre, apellido, edad) VALUES (?,?,?)",
      [nombre, apellido, edad]
    );
    console.log(results);
    res.json({ id: results.insertId, nombre, apellido, edad });
  } catch (error) {}
=======
  const { nombre, apellido, edad } = req.body;
  const [results] = await pool.query(
    "INSERT INTO cliente( nombre, apellido, edad) VALUES (?,?,?)",
    [nombre, apellido, edad]
  );
  //insertID es para saber con que ID se ingresando el cliente
  res.json({ id: results.insertId, nombre, apellido, edad });
>>>>>>> ad5ab80fcbe3b4622043aff26379e5774aaed5a1
};
//Se esta actualizando la informacion de los clientes se selecciona cliente depende por ID
export const updateTasks = async (req, res) => {
  try {
    const { nombre, apellido, edad } = req.body;
    const [result] = await pool.query("UPDATE cliente SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res, status(500).json({ message: "error de conexion" });
  }
};
//Se estan eliminando los cliente dependiendo del ID que nos manden
export const deleteTasks = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM cliente WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "task not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    return res, status(500).json({ message: "error de conexion" });
  }
<<<<<<< HEAD
};
=======

  return res.sendStatus(204);
};
>>>>>>> ad5ab80fcbe3b4622043aff26379e5774aaed5a1
