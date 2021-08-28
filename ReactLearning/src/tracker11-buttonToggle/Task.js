import { FaTimes } from 'react-icons/fa';

const Task = ({ taskDetail, delFunc, toggleFunc }) => {
  return (
    <div
      className={`task ${taskDetail.reminder ?
      'reminder' : ''}`}
      onDoubleClick={() => toggleFunc(taskDetail.id)}
    >
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
