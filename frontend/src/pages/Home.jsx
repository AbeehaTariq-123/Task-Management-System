import { useEffect, useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ProgressBar from "../components/ProgressBar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const fetchTasks = async () => {
    const { data } = await API.get("/tasks");
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const token = localStorage.getItem("token");

    await API.post("/tasks", task, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    fetchTasks();
  };

  const deleteTask = async (id) => {
    const token = localStorage.getItem("token");

    await API.delete(`/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    fetchTasks();
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Navbar />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ProgressBar tasks={tasks} />

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default Home;
