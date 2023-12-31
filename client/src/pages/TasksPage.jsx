import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  }, []);

  //en esta funcion se estan trayendo todos los datos para mostrarlos al cliente
  function renderMain() {
    if (tasks.length == 0) {
      return <h1 className="text-white text-3xl">no hay clientes</h1>;
    }
    /**
     * Renderiza los elementos TaskCard para cada tarea.
     * Un array de elementos TaskCard.
     */
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }
  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
