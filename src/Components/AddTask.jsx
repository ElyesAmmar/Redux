import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from '../Actions/actions';

const AddTask = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      description: description,
      isDone: false
    };
    dispatch(addTask(newTask));
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;