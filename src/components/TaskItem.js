import React from 'react';
import Button from './Button';

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div className="task">
      <span>Task Name: {task.name}</span>
      <Button label="Edit" onClick={onEdit} />
      <Button label="Delete" onClick={onDelete} />
    </div>
  );
};

export default TaskItem;
