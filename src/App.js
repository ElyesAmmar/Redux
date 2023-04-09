import { useState } from 'react';
import AddTask from './Components/AddTask';
import ListTask from './Components/TaskList';

const App = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div>
      <h1>ToDo App</h1>
      <AddTask />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not')}>Not Done</button>
      </div>
      <ListTask filter={filter} />
    </div>
  );
};

export default App;
