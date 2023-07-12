import { Form, Formik } from "formik";
import React from "react";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";

function Login() {
  const { login } = useTasks();

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <div className="max-w-sm rounded-lg bg-slate-200 text-center m-auto p-4 mt-12">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await login(values);
          console.log("🚀 ~ file: Login.jsx:20 ~ onSubmit={ ~ values:", values)
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form className="grid max-w-xs p-5 m-auto" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold">Login</h1>
            <label>Correo</label>
            <input
              className="rounded-md mb-2"
              type="text"
              name="username"
              onChange={handleChange}
              value={values.username}
            />
            <label>Contraseña</label>
            <input
              className="rounded-md"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            <div className="flex justify-center">
              <button
                className="bg-slate-500 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded mt-5"
                type="submit"
              >
                Ingresar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
