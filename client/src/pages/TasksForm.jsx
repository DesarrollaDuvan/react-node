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
    <div>
      {/* este formik sirve para no crear el usestate y que se puedan ir llenando las variables */}
      <h1>{params.id ? "Edit task" : "new task"}</h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
            navigate("/")
          } else {
            await createTasks(values);
          }
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
          <Form onSubmit={handleSubmit}>
            <label>nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Escribe tu nombre"
              onChange={handleChange}
              value={values.nombre}
            />
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              placeholder="Escribe tu apellido"
              onChange={handleChange}
              value={values.apellido}
            />
            <label>Edad</label>
            <input
              type="number"
              name="edad"
              onChange={handleChange}
              value={values.edad}
            />
            <button type="submit" disabled={isSubmitting}>
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
