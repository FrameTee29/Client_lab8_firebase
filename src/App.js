import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { firestore } from './index'

function App() {

  const [tasks, setTasks] = useState([])
  const [name , setName] = useState('')
  useEffect(() => {
    retriveData()
  }, [])

  const retriveData = () => {
    firestore.collection("tasks").onSnapshot((snapshot) => {
      console.log(snapshot.docs)
      let mytasks = snapshot.docs.map(d => {
        const { id, name } = d.data();
        console.log(id, name)
        return { id, name };
      });
      setTasks(mytasks)
    })
  }
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


  const addTask =()=>{
    let id = (tasks.length ===0)?1:tasks[tasks.length-1].id +1;
    console.log("id = ="+id);
    firestore.collection("tasks").doc(id+'').set({id,name});
  }

  return (
    <div>
      <h1>Todo</h1>
      <input type="text" name="name" onChange={e => setName(e.target.value)} />
      <button onClick={addTask}>Submit</button>
      <ul>{renderTask()}</ul>
    </div>
  );
}

export default App;
