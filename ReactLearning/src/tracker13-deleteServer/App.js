import { useState, useEffect } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask'

const App = () => {
  // toggle Add Task Form
  const [showAddTask, setShowAddTask] = useState(false);
  const [taskGlobal, setTasks] = useState([]);

  // Load db.json content to the page, using fetch API with async
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, []);

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...taskGlobal, newTask]);
  };

  // Delete Tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(taskGlobal.filter(
      (task) => task.id !== id)
    )
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      taskGlobal.map((task) =>
        task.id === id ? {...task, reminder:
        !task.reminder} : task
      )
    )
  };

  return (
    <div className='container'>
      <Header
        onAdd = {() => setShowAddTask(!showAddTask)}
        showAdd = {showAddTask}
      />
      {/* Ternary operator without else: */}
      {showAddTask && <AddTask onAddClick={addTask} />}
      {/* Ternary operator: */}
      {taskGlobal.length > 0 ? (
          <Tasks
            taskList={taskGlobal}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          'No Tasks To Show'
      )}
    </div>
  )
};

export default App;
