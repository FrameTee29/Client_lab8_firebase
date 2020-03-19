import React from 'react';

export default (props) => {
    const {task,deleteTask,editTask}=props;
    const {id,name} = task
    return (
        <li>
            {id} : {name}
            <button onClick={() => deleteTask(id)}>Delete</button>
            <button onClick={() => editTask(id)}>Edit</button>
        </li>
    )
}