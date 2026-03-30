import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { getTaskById, updateTask } from "../services/taskService";

function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await getTaskById(id);
        setTask(response.data);
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    fetchTask();
  }, [id]);

  const handleUpdate = async (taskData) => {
    try {
      await updateTask(id, taskData);
      navigate("/");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div>
      <h1>Edit Task</h1>
      {task ? <TaskForm initialData={task} onSubmit={handleUpdate} /> : <p>Loading...</p>}
    </div>
  );
}

export default EditTaskPage;