function TaskCard({ task, deleteTask }) {
  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate?.substring(0,10)}</p>

      <button onClick={() => deleteTask(task._id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
