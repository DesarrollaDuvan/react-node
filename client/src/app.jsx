import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TasksForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";

function App() {
  return (
    <TaskContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />}></Route>
        <Route path="/new" element={<TasksForm />}></Route>
        <Route path="/edit/:id" element={<TasksForm />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </TaskContextProvider>
  );
}

export default App;
