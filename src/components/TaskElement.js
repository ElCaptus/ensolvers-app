import React, {useContext, useState} from 'react'
import './TaskElement.css';

export const TaskElement = props =>{

    const [taskEditing, setTaskEditing] = useState(null)

    const [editingText, setEditingText] = useState(props.task.name)

    const deleteTask = ()=>{
        props.delcb(props.task.id)
    }
    const cb = () =>{
        setTaskEditing(null)
    }
    return( <li className='item'>
        <input id={props.task.id} className='item-checkbox' type='checkbox' value={props.task.done}/>
        {props.task.id !== taskEditing ? 
        (<div className='centered'>
            <label htmlFor={props.task.id}>{props.task.name}</label>
            <input className='edit-item-button' type='button' value='Edit' onClick={()=>{setTaskEditing(props.task.id)}} /> 
        </div>)
            : 
        (<div className='centered'>
            <input type="text" onChange={(e)=>{setEditingText(e.target.value)}} value={editingText}/>
            <input type="button" value="Save" onClick={() => {props.task.name = editingText;cb();}}/>
        </div>
        )}
            <input type="button" value="X" className="delete-button" onClick={deleteTask}/>
    </li>)
}