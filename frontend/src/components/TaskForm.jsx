import { useState, useEffect } from "react";

function TaskForm({ initialData, onSubmit }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "PENDING",
    dueDate: "",
  });

  useEffect(() => {
    if (initialData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTask({
        title: initialData.title || "",
        description: initialData.description || "",
        status: initialData.status || "PENDING",
        dueDate: initialData.dueDate || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
      />

      <label>Status</label>
      <select
        name="status"
        value={task.status}
        onChange={handleChange}
      >
        <option value="PENDING">PENDING</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="DONE">DONE</option>
      </select>

      <label>Due Date</label>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
      />

      <button type="submit">Save Task</button>
    </form>
  );
}

export default TaskForm;