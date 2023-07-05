import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/task.api";

function TasksForm() {
  return (
    <div>
      //este formik sirve para no crear el usestate y que se puedan ir llenando las variables
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          edad: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            //aca se esta enviando la informacion al backend para subirlo a la base de datos
            const response = await createTaskRequest(values);
            console.log(response);
            //este es para limpiar el formulario despues de enviar
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        //se crea una function para poder ir llenando el formik con el handleChange y los name de los input
        //con el handleSubmit lo que se esta haciendo es que se estan enviando los datos de los input al onSubmit
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
              {isSubmitting ? "Saving..." : "Save"}//estos es un if para desaparecer el boton mientras se esta enviando
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TasksForm;
