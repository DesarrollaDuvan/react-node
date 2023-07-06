import { DeleteTasksRequest } from "../api/task.api";
import { useTasks } from "../context/TaskProvider";
import { Navigate, useNavigate } from "react-router-dom";
function TaskCard({ task }) {
  const { deleteTaks } = useTasks();
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 rounded-md p-4">
      <label className="text-l font-bold">Cliente</label>
      <h2 className="text-sm">{task.nombre}</h2>
      <h2 className="text-sm">{task.apellido}</h2>
      <label className="text-l font-bold">Edad</label>
      <h2 className="text-xs">{task.edad}</h2>
      <div className="flex mt-3 gap-x-2">
        <button className="bg-red-300 px-2 py-1  rounded" onClick={() => deleteTaks(task.id)}>Delete</button>
        <button className="bg-green-400 px-4 py-1 rounded" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
      </div>
    </div>
  );
}
export default TaskCard;
