import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
