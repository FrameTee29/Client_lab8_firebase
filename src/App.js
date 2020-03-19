import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, name: "do homework" },
    { id: 2, name: "write node js" },
  ])

  useEffect(() => { 
    
  })
  const renderTask = () => {
    if (tasks && tasks.length) {
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
    else {
      return (<li>No task</li>)
    }
  }

  return (
    <div>
      <h1>Todo</h1>
      <ul>{renderTask()}</ul>
    </div>
  );
}

export default App;
