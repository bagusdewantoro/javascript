import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

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

  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(taskGlobal.filter(
      (task) => task.id !== id)
    )
  };

  return (
    <div className='container'>
      <Header />
      {taskGlobal.length > 0 ? (
        <Tasks taskList={taskGlobal}
        onDelete={deleteTask} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  )
};

export default App;
