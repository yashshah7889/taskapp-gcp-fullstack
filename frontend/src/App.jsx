import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreateTaskPage from "./pages/CreateTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import TaskDetailPage from "./pages/TaskDetailPage";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateTaskPage />} />
          <Route path="/task/:id" element={<TaskDetailPage />} />
          <Route path="/edit/:id" element={<EditTaskPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;