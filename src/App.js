import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, name: "do homework" },
    { id: 2, name: "write node js" },
  ])

  const renderTask = () => {
    return (
      tasks.map((task, index) => {
        return (
          <li key={index}>
            {task.id} : {task.name}
          </li>
        )
      })
    )
  }

  return (
    <div>
      <h1>Todo</h1>
      <ul>{renderTask()}</ul>
    </div>
  );
}

export default App;
