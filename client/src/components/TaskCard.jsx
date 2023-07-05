import { DeleteTasksRequest } from "../api/task.api";
import { useTasks } from "../context/TaskProvider";
import { Navigate, useNavigate } from "react-router-dom";
function TaskCard({ task }) {
  const { deleteTaks } = useTasks();
  const navigate = useNavigate();

  return (
    <div>
      <h2>{task.nombre}</h2>
      <h2>{task.apellido}</h2>
      <h2>{task.edad}</h2>
      <button onClick={() => deleteTaks(task.id)}>Delete</button>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
    </div>
  );
}
export default TaskCard;
