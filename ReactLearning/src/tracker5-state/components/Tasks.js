import Task from './Task';

const Tasks = ({ taskList }) => {

  return (
    <>
      {taskList.map((task) => (
        <Task key={task.id} taskDetail={task} />
      ))}
    </>
  )
};

export default Tasks;
