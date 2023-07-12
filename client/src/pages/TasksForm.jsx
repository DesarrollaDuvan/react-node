import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TasksForm() {
  const { createTasks, getTask, updateTask } = useTasks();

  const params = useParams();

  const navigate = useNavigate();

  const [task, setTask] = useState({
    nombre: "",
    apellido: "",
    edad: "",
  });

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          nombre: task.nombre,
          apellido: task.apellido,
          edad: task.edad,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div className="mx-auto">
      {/* este formik sirve para no crear el usestate y que se puedan ir llenando las variables */}
      <Formik
        initialValues={task}
        enableReinitialize={true}
        
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTasks(values);
          }
          navigate("/");
          //este es para limpiar el formulario despues de enviar
          /* actions.resetForm(); */
          setTask({
            nombre: "",
            apellido: "",
            edad: "",
          });
        }}
      >
        {/* se crea una function para poder ir llenando el formik con el handleChange y los name de los input */}
        {/* con el handleSubmit lo que se esta haciendo es que se estan enviando los datos de los input al onSubmit */}
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-lg font-bold uppercase text-center">
              {params.id ? "Edit task" : "new task"}
            </h1>
            <label className="block">nombre</label>
            <input
              type="text"
              name="nombre"
              className="px-2 py-2 rounded-sm w-full"
              placeholder="Escribe tu nombre"
              onChange={handleChange}
              value={values.nombre}
            />
            <label className="block">Apellido</label>
            <input
              type="text"
              name="apellido"
              className="px-2 py-2 rounded-sm w-full"
              placeholder="Escribe tu apellido"
              onChange={handleChange}
              value={values.apellido}
            />
            <label className="block">Edad</label>
            <input
              type="text"
              name="edad"
              className="px-2 py-2 rounded-sm w-full"
              onChange={handleChange}
              value={values.edad}
            />
            <button
              className="block bg-cyan-950 text-white px-3 py-1 rounded w-full mt-2"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
              {/* estos es un if para desaparecer el boton mientras se esta enviando */}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TasksForm;
