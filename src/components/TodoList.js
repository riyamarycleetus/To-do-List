import React, { useState } from 'react';
import TodoItem from './TodoItem'; // Assuming TodoItem component is in the same directory

function TodoList() {
  const [tasks, setTasks] = useState([
    
  ]);

  const [text, setText] = useState('');

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }));
  }

  return (
    <div className="todo-list">
         <h2>TO DO LIST</h2>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="addbutton" onClick={() => addTask(text)}>Add</button>
    </div>
  );
}

export default TodoList;
