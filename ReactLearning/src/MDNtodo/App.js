import { useState } from 'react';
import Todo from './Todo';
import Form from './Form';
import FilterButton from './FilterButton';
import { nanoid } from 'nanoid';

const Between = ({ taskData }) => {
  const [tasks, setTasks] = useState(taskData);
  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
     // if this task has the same ID as the edited task
     if (id === task.id) {
       // use object spread to make a new object
       // whose `completed` prop has been inverted
       return {...task, completed: !task.completed}
     }
     return task;
   });
   setTasks(updatedTasks);
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => id !== task.id));
  }
  const addTask = (name) => {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const editTask = (id, newName) => {
    const editedTaskList = tasks.map(task => {
    // if this task has the same ID as the edited task
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
  const headingText = `${tasks.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>Edit Feature</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks.map(task => (
          <Todo
            key={task.id}
            id={task.id}
            name={task.name}
            completed={task.completed}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
};


const App = () => {
  const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];
  return (
    <Between taskData={DATA} />
  )
};

export default App;
