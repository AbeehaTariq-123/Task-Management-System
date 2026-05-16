function ProgressBar({ tasks }) {
  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const percentage = tasks.length
    ? (completed / tasks.length) * 100
    : 0;

  return (
    <div>
      <h3>Progress: {percentage.toFixed(0)}%</h3>
      <progress value={percentage} max="100"></progress>
    </div>
  );
}

export default ProgressBar;
