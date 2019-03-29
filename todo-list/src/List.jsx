import React from 'react'



export class List extends React.Component {


  render() {
    return (
      <div className="taskList">
        <ul>
          {this.props.tasks.map(task => (
            <div key = {task.id}>
              <input type="checkbox"
              />
              <li
                className="task">
                {task.description}
              </li>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}