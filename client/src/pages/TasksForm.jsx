import { Form, Formik } from "formik";

function TasksForm() {
  return (
    <div>
      <Formik>
        <Form>
          <label>title</label>
          <input type="text" name="title" placeholder="Write a title" />
          <label>Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Write a descrition"
          ></textarea>

          <button>Save</button>
        </Form>
      </Formik>
    </div>
  );
}

export default TasksForm;
