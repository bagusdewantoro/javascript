import { useState } from 'react';

const Tasks = () => {
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
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks
