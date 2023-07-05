import axios from "axios";
//se esta trayendo todos los clientes para mostrarlos
export const getTaskRequest = async () => {
  try {
    const rpt = await axios.get("http://localhost:4000/tasks");
    return rpt.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
//se estan pasando los datos para crear el cliente
export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/tasks", task);
//se esta eliminando el cliente que se pasa por id
export const DeleteTasksRequest = async (id) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);
  
