import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTaskById } from "../services/taskService";

function TaskDetailPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await getTaskById(id);
        setTask(response.data);
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    fetchTask();
  }, [id]);

  if (!task) {
    return <p>Loading...</p>;
  }

  return (
    <div className="task-detail">
      <h1>Task Details</h1>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
      <p><strong>Created At:</strong> {task.createdAt}</p>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default TaskDetailPage;