import Task from './Task';

const Tasks = ({ taskList, onDelete }) => {

  return (
    <>
      {taskList.map((task) => (
        <Task key={task.id} taskDetail={task}
        delFunc={onDelete}/>
      ))}
    </>
  )
};

export default Tasks;
