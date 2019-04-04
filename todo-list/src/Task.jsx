import React from 'react'


export class Task extends React.Component {


  deleteTask = (id) => {
    fetch(`api/tasks/${id}`, {
      method: 'DELETE'
    })
  }


  updateTodo = (evt, id) => {
    fetch(`api/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ isDone: evt.target.checked }),
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  render() {
    return (
      this.props.tasks.map((task) => {
        return (
          <li
            className="task"
            key={task.id}>

            <input
              className="taskCheckbox"
              type="checkbox"
              checked = {task.isDone}
              onChange={(evt) => this.updateTodo(evt, task.id)}/>
            <label className="taskLabel">
              {task.description}
            </label>
            <span
              className="deleteButton"
              onClick={() => this.deleteTask(task.id)}>
              x
            </span>
          </li>
        )
      })
    )
  }
}