import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Footer from './Footer';
import About from './About';

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

  // Fetch all tasks from server
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks`);
    const data = await res.json();
    return data;
  }

  // Fetch each task from server
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  // Add Task to server
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...taskGlobal, data]);
  };

  // Delete Task from server
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(taskGlobal.filter(
      (task) => task.id !== id)
    )
  };

  // Toggle Reminder // Update task in the server
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle,
      reminder: !taskToToggle.reminder
    };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    });
    const data = await res.json();
    setTasks(
      taskGlobal.map((task) =>
        task.id === id ? {...task, reminder:
        !data.reminder} : task
      )
    )
  };

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd = {() => setShowAddTask(!showAddTask)}
          showAdd = {showAddTask}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
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
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  )
};

export default App;
