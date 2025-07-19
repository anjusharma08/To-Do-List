import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
          placeholder="Add a new task"
          autoFocus
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <TransitionGroup component="ul" className="task-list">
        {tasks.map((task, index) => (
          <CSSTransition key={index} timeout={300} classNames="fade">
            <TodoItem
              task={task}
              index={index}
              toggleTaskCompletion={toggleTaskCompletion}
              handleDeleteTask={handleDeleteTask}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default App;
