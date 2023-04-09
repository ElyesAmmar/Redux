import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = ({ filter }) => {
  const tasks = useSelector(state => {
    if (filter === 'done') {
      return state.tasks.filter(task => task.isDone);
    } else if (filter === 'not') {
      return state.tasks.filter(task => !task.isDone);
    } else {
      return state.tasks;
    }
  });

  return (
    <ul>
      {()=>tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default ListTask;
