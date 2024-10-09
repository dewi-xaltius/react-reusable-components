import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const Form = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    onAdd(newTask);
    setNewTask('');
  };

  return (
    <div className="new-task">
      <h2>Add New Task</h2>
      <Input
        type="text"
        placeholder="Task Name"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button label="Add" onClick={handleAdd} />
    </div>
  );
};

export default Form;