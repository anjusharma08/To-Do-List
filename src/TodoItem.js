import React from 'react';
import './TodoItem.css';  // Import the CSS file

const TodoItem = ({ task, index, toggleTaskCompletion, handleDeleteTask }) => {
  return (
    <li className="task-item">
      <span
        onClick={() => toggleTaskCompletion(index)}
        className={task.completed ? 'completed-task' : ''}
      >
        {task.text}
      </span>
      <button onClick={() => handleDeleteTask(index)} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;