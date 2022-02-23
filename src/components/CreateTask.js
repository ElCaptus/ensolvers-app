import React, { useState } from "react";
import './CreateTask.css'

export const CreateTask = props =>{
    const [ newTask, setNewTask ] = useState('')
    const updateValue = e => setNewTask(e.target.value)

    const addNewTask = () => {
        props.cb(newTask)
        setNewTask('')
      }

    return(
        <div className="create-task">
            <input type="text" value={newTask} onChange={updateValue} />
            <input type="button" value="Add" onClick={addNewTask}/>
        </div>
    )
}