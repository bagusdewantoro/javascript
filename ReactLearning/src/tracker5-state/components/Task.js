const Task = ({ taskDetail }) => {
  return (
    <div className='task'>
      <h3>{taskDetail.text}</h3>
      <p>{taskDetail.day}</p>
    </div>
  )
};

export default Task;
