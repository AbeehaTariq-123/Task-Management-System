import { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    dueDate: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);

    setTask({
      title: "",
      description: "",
      status: "Pending",
      dueDate: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={task.title}
        onChange={(e) =>
          setTask({ ...task, title: e.target.value })
        }
      />

      <textarea
        placeholder="Description"
        value={task.description}
        onChange={(e) =>
          setTask({ ...task, description: e.target.value })
        }
      />

      <select
        value={task.status}
        onChange={(e) =>
          setTask({ ...task, status: e.target.value })
        }
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <input
        type="date"
        value={task.dueDate}
        onChange={(e) =>
          setTask({ ...task, dueDate: e.target.value })
        }
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
