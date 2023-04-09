import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../Actions/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      <span>{task.description}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Task;
