import React from 'react';



export const Task = (props) => {
  return (
    props.tasks.map((task) => {

      return (
        <li
          className="liTask"
          key={task.id}>

            <div className="taskContainer">
              <input 
                className="taskCheckbox"
                id = {task.id}
                type="checkbox" 
                checked = {task.isDone} 
                onChange={(evt) => props.isDone(evt, task.id)}
              />
              <label className="description" htmlFor={task.id}>
                  {task.description}
              </label>
              <i 
                className="small material-icons deleteButton"
                onClick={() => props.delete(task.id)} 
              >
                delete_forever
              </i>
            </div>

        </li>
      );
    })
  );
}