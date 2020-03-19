import React from 'react';
import './Task.css'


export default (props) => {
    const { task, deleteTask, editTask } = props;
    const { id, name } = task
    return (
        <li>
            <div className="id">
                {id}
            </div>
            <div className="containerbutton">
                <div className="name">
                    {name}
                </div>
            </div>
            <div className="containerbutton">
                <button type="button" class="btn btn-danger button" onClick={() => deleteTask(id)}>Delete</button>
                <button type="button" class="btn btn-dark button" onClick={() => editTask(id)}>Edit</button>
            </div>

        </li>
    )
}