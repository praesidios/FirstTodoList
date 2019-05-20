import React from 'react';
import editIcon from './img/edit.png';
import deleteIcon from './img/deleteIcon.png';


  export const Task = (props) => {
    return (
      props.tasks.map((task) => {

        return (
          <li
            className="task"
            key={task.id}>

            <input
              className="taskCheckbox"
              type="checkbox"
              checked = {task.isDone}
              onChange={(evt) => props.isDone(evt, task.id)}/>
            <label className="taskLabel">
              <span>{task.description}</span>
            </label>
            <span
              className="deleteButton"
              onClick={() => props.delete(task.id)}>
              <img src={deleteIcon} alt="Delete Icon"/>
            </span>
            <span className="editIcon">
              <img src={editIcon} alt="Edit Icon"/>
            </span>
          </li>
        );

      })
    );
  }