import { FaTimes } from 'react-icons/fa';

const Task = ({ taskDetail, delFunc }) => {
  return (
    <div className='task'>
      <h3>
        {taskDetail.text}
        <FaTimes style={{
          color: 'red',
          cursor: 'pointer' }}
          onClick={() => delFunc(taskDetail.id)}
        />
      </h3>
      <p>{taskDetail.day}</p>
    </div>
  )
};

export default Task;
