import React, { useState } from 'react';
import TaskItem from './components/TaskItem';
import Form from './components/Form';

const App = () => {
  const [tasks, setTasks] = useState([
    { name: 'Task 1' },
    { name: 'Task 2' },
    { name: 'Task 3' },
  ]);

  const handleEdit = (index) => {
    console.log('Editing task #' + index);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleAdd = (task) => {
    setTasks([...tasks, { name: task }]);
  };

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onEdit={() => handleEdit(index)}
          onDelete={() => handleDelete(index)}
        />
      ))}
      <Form onAdd={handleAdd} />
    </div>
  );
};

export default App;