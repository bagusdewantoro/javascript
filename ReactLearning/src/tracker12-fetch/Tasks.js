import Task from './Task';

const Tasks = ({ taskList, onDelete, onToggle }) => {

  return (
    <>
      {taskList.map((task) => (
        <Task
          key={task.id}
          taskDetail={task}
          delFunc={onDelete}
          toggleFunc={onToggle}
        />
      ))}
    </>
  )
};

export default Tasks;
