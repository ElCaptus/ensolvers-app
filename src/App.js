import React, { useState, createContext, useContext} from 'react'
import './App.css';
import { TaskElement } from './components/TaskElement';
import { CreateTask } from './components/CreateTask'

function App() {

  const [taskItems, setTaskItems] = useState([])

  const deleteTask = taskId =>{ 
    const tasksUpdated = taskItems.filter( t => t.id !== taskId)
    setTaskItems([...tasksUpdated])
  }

  const mapping = () =>{
    
    return taskItems.map( task => 
      <TaskElement task={task} key={task.name} delcb={deleteTask} />
      )
  }

  const addNewTask = task =>{
    if (!taskItems.find( t => t.name === task)){
      setTaskItems([...taskItems, { name: task, done: false , id: Math.floor(Math.random()*1000+1)}])
    }
  }


  return (
  <div className='App'>
      <h1>To-Do List</h1>
      <div>
        <ul>
          {mapping()}
        </ul>
        <CreateTask cb={addNewTask} />
      </div>
  </div>
  );
}

export default App;
