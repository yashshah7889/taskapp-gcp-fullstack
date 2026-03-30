import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { createTask } from "../services/taskService";

function CreateTaskPage() {
  const navigate = useNavigate();

  const handleCreate = async (taskData) => {
    try {
      await createTask(taskData);
      navigate("/");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div>
      <h1>Create Task</h1>
      <TaskForm onSubmit={handleCreate} />
    </div>
  );
}

export default CreateTaskPage;