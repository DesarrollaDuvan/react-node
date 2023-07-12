import axios from "axios";
//se esta trayendo todos los clientes para mostrarlos
export const getTasksRequest = async () => {
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
//se esta haciendo consulta individual
export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/task/${id}`);
//se esta actualizando los datos del cliente
export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, newFields);
//se esta validando login
export const getLogin = async (log) => {
  await axios
    .post("http://localhost:4000/login", log)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

