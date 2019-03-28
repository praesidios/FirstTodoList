import React from 'react'


export class Task extends React.Component {


  deleteTask = (id) => {
    fetch(`api/tasks/${id}`, {
      method: 'DELETE'
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
              type="checkbox" />
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