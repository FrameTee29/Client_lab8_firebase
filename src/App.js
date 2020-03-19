import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { firestore } from './index'
import Tasks from './Tasks'

function App() {

  const [tasks, setTasks] = useState([])
  const [name, setName] = useState('')
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

  const deleteTask = (id) => {
    firestore.collection('tasks').doc(id + '').delete();
  }

  const editTask = (id) => {
    firestore.collection('tasks').doc(id + '').set({ id, name });
  }

  const renderTask = () => {
    if (tasks && tasks.length) {
      return (
        tasks.map((task, index) => {
          return (
            <Tasks key={index} task={task}
              deleteTask={deleteTask}
              editTask={editTask} />
          )
        })
      )
    }
    else {
      return (<li>No task</li>)
    }
  }


  const addTask = () => {
    let id = (tasks.length === 0) ? 1 : tasks[tasks.length - 1].id + 1;
    firestore.collection("tasks").doc(id + '').set({ id, name });
  }

  return (
    <div className="App">
      <div className="ContainerHeader">
        <h1>Todo</h1>
        <input type="text" name="name" className="" onChange={e => setName(e.target.value)} />
        <button onClick={addTask} type="button" class="btn btn-warning put">Submit</button>
      </div>
      <div className="Show">{renderTask()}</div>
    </div>
  );
}

export default App;
