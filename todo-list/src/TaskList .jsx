import React from 'react'
import { Task } from './Task'
import { AddTaskInput } from './AddTaskInput.jsx'

export class TaskList extends  React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: null,
      isLoading: true
    }
  }

  getTodos() {
    fetch('api/tasks')
      .then(response => response.json())
      .then(tasks => this.setState({  
        tasks,
        isLoading: false
      }));
  }

  
  componentDidMount() {
    this.getTodos()
    console.log('DidMount')
  }


  componentDidUpdate(prevState, prevProps){
    console.log('Update')
    console.log('prevState', prevState)
    console.log('this.State', this.state)
    console.log('prevProps', prevProps)
    console.log('thisProps', this.props)

  }

  render() {
    console.log("render")

    return this.state.isLoading ? 
      '...Loading...' : (
        <>
          <AddTaskInput/>
          <div className="listWrapper">
            <ul className="taskList">
              <Task
                tasks = {this.state.tasks}
              />
            </ul>
          </div>
        </>
      )
  }
}
