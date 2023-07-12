import { Children, createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  DeleteTasksRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
  getLogin,
} from "../api/task.api";

import { TaskContext } from "./TaskContext";
import axios from "axios";

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  //se esta ultilizando el useState para guardar los datos que llegan de la base de datos para luego mostrarlos al cliente
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    //se esta trayendo los datos de la consulta de BD
    const consulta = await getTasksRequest();
    //se guardan en el useState
    setTasks(consulta);
  }

  //se esta resiviendo el id del onclik para eliminar
  const deleteTaks = async (id) => {
    try {
      //le pasa el id a la consulta para poder eliminar
      const response = await DeleteTasksRequest(id);
      //com este filter lo que se esta haciendo es que si hay un arreglo diferente al ID se va a quitar para que no aparezca mas en la pantalla del cliente
      setTasks(tasks.filter((tasks) => tasks.id !== id));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const createTasks = async (task) => {
    try {
      //aca se esta enviando la informacion al backend para subirlo a la base de datos
      const response = await createTaskRequest(task);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const resp = await getTaskRequest(id);
      console.log(resp);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      const rpt = await updateTaskRequest(id, newFields);
      console.log(rpt);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (log) => {
    try {
      const rptLog = await getLogin(log);
      console.log("🚀 ~ file: TaskProvider.jsx:78 ~ login ~ rptLog:", rptLog)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, loadTasks, deleteTaks, createTasks, getTask, updateTask , login}}
    >
      {children}
    </TaskContext.Provider>
  );
};
