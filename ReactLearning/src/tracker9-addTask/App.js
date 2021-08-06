import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'

const App = () => {
  const [taskGlobal, setTasks] = useState([
    {
      id: 1,
      text: 'Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Study',
      day: 'Feb 7th at 5:30pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Playing',
      day: 'Jan 1st at 1:30am',
      reminder: true,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    console.log(task)
  }

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
