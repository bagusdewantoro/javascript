import { useState } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask'

const App = () => {
  const [taskGlobal, setTasks] = useState([]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...taskGlobal, newTask]);
  };

  // Delete Tasks
  const deleteTask = (id) => {
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
      <Header />
      <AddTask onAdd={addTask} />
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
