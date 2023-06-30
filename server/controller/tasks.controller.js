import pkg from "express/lib/response.js";
const { status } = pkg;
import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM cliente");
  res.json(result);
};

export const getTask = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM cliente WHERE id = ?", [
    req.params.id,
  ]);
  if (result.length === 0) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(result[0]);
};

export const createTasks = async (req, res) => {
  const { nombre, apellido, edad } = req.body;
  const [results] = await pool.query(
    "INSERT INTO cliente( nombre, apellido, edad) VALUES (?,?,?)",
    [nombre, apellido, edad]
  );
  console.log(results);
  res.json({ id: results.insertId, nombre, apellido, edad });
};

export const updateTasks = async (req, res) => {
  const { nombre, apellido, edad } = req.body;
  const [result] = await pool.query("UPDATE cliente SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.json(result)
};

export const deleteTasks = async (req, res) => {
  const [result] = await pool.query("DELETE FROM cliente WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "task not found" });
  }

  return res.sendStatus(204);
};
