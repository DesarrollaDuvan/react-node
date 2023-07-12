import pkg from "express/lib/response.js";
const { status } = pkg;
import { pool } from "../db.js";
import bcrypt from "bcrypt";

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
  try {
    const [result] = await pool.query("SELECT * FROM cliente WHERE id = ?", [
      req.params.id,
    ]);
    //si no se encuentra nada con el ID  que nos mandan se manda un 404
    if (result.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(result[0]);
  } catch (error) {
    return res, status(500).json({ message: "error de conexion" });
  }
};

//Se esta insertando nuvos clientes en la base de datos
export const createTasks = async (req, res) => {
  try {
    const { nombre, apellido, edad } = req.body;
    const password = String(req.body.edad);
    const pass = await bcrypt.hash(password, 8);
    const [results] = await pool.query(
      "INSERT INTO cliente( nombre, apellido, edad) VALUES (?,?,?)",
      [nombre, apellido, pass]
    );
    console.log(results);
    //insertID es para saber con que ID se ingresando el cliente
    res.json({ id: results.insertId, nombre, apellido, edad });
  } catch (error) {}
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
};
//Se van a traer los datos para validar el login

export const login = async (req, res) => {
  try {
    console.log("esta en el servidor", req.body);
    const pass = req.body.password;
    const [result] = await pool.query(
      "SELECT * FROM cliente WHERE nombre = ?",
      [req.body.username]
    );

    if (result.length === 0) {
      // El usuario no existe
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(pass, result[0].contraseña);
    if (isPasswordValid) {
      // Contraseña válida
      return res.status(200).json({ message: "Usuario correcto" });
    } else {
      // Contraseña incorrecta
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error de servidor" });
  }
};

