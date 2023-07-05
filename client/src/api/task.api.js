import axios from "axios";

//lo que se esta haciendo es que se esta enviando la informacion al backend para subirlo a la base de datos
export const createTaskRequest = async (task) => 
  await axios.post('http://localhost:4000/tasks', task);
