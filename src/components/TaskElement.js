import React, {useState} from 'react'
import './TaskElement.css';

export const TaskElement = props =>{
    const [taskEditing, setTaskEditing] = useState(null)
    const [editingText, setEditingText] = useState('')

    const deleteTask = ()=>{
        props.delcb(props.task.id)
    }
    const cb = () =>{
        setTaskEditing(null)
        setEditingText('')
    }
    return( <li className='item'>
        <input id={props.task.id} className='item-checkbox' type='checkbox' value={props.task.done}/>
        {props.task.id !== taskEditing ? 
        (<div>
            <label htmlFor={props.task.id}>{props.task.name}</label>
            <input className='edit-item-button' type='button' value='Edit' onClick={()=>{setTaskEditing(props.task.id)}} /> 
        </div>)
            : 
        (
        <div>
            <input type="text" onChange={(e)=>{setEditingText(e.target.value)}} value={props.task.name}/>
            <input type="button" value="Save" onClick={props.editcb(props.task.id, editingText)}/>
        </div>
        )}
            <input type="button" value="X" className="delete-button" onClick={deleteTask}/>
    </li>)
}