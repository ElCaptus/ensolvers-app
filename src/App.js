import React, { useState } from 'react'
import './App.css';
import { TaskElement } from './components/TaskElement';
import { CreateTask } from './components/CreateTask'

function App() {
  const [taskItems, setTaskItems] = useState([])
  

  const deleteTask = taskId =>{ 
    const tasksUpdated = taskItems.filter( t => t.id !== taskId)
    setTaskItems([...tasksUpdated])
  }

  const editTasks = (id, editingText) =>{
    const updateTasks = [...taskItems].map( task => {
      if(task.id === id)
        task.name = editingText
      return task
    })
}

  const mapping = () =>{
    
    return taskItems.map( task => 
      <TaskElement task={task} key={task.name} editcb={editTasks} delcb={deleteTask} />
      )
  }

  const addNewTask = task =>{
    if (!taskItems.find( t => t.name === task)){
      setTaskItems([...taskItems, { name: task, done: false , id: Math.floor(Math.random()*1000+1)}])
    }
  }


  return (
  <div>
      <h1>To-Do List</h1>
      <div className='main-wrap'>
        <ul>
          {mapping()}
        </ul>
        <CreateTask cb={addNewTask} />
      </div>
      <div id='secondary-wrap'>
        
      </div>
  </div>
  );
}

export default App;
