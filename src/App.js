import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    { name: 'Task 1' },
    { name: 'Task 2' },
    { name: 'Task 3' },
  ]);

  const handleEdit = (index) => {
    console.log(`Editing task ${index}`);
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
        <div key={index} className="task">
          <span>Task Name: {task.name}</span>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <div className="new-task">
        <h2>Add New Task</h2>
        <input type="text" placeholder="Task Name" id="newTaskInput" />
        <button onClick={() => handleAdd(document.getElementById('newTaskInput').value)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default App;
