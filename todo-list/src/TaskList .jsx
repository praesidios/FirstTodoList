import React from 'react'
import { Task } from './Task'
import { AddTaskInput } from './AddTaskInput.jsx'

export class TaskList extends  React.Component {
  constructor(props) {
    super(props)
    

    this.state = {
      tasks: null,
      isLoading: true,
      inputValue: ''
    }
  }



  getTodos() {
    fetch('api/tasks/')
      .then(response => response.json())
      .then(tasks => this.setState({  
        tasks,
        isLoading: false,
      }));
  }

  deleteTask = (id) => {
    fetch(`api/tasks/${id}`, {
      method: 'DELETE'
    })
    .then(() => { 
      this.getTodos()
    });
  };


  isDone = (evt, id) => {
    fetch(`api/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ isDone: evt.target.checked }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(() => { 
        this.getTodos()
      })
  };
  


  addTask = (evt) => {
    if (evt.key === 'Enter') {
      fetch('api/tasks/', {
        method: 'POST',
        body: JSON.stringify({ description: evt.target.value }),
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(() => {
          this.setState({
            inputValue: ''
          });
        })
        .then(() => { 
          this.getTodos()
        })
    }
  }


  componentDidMount() {
    this.getTodos()
  }


  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value });
  }


  render() {

    return (this.state.isLoading ? 
      '...Loading...' : (
        <div className="content">
          <div className="App">
            <ul className="Tasklist">
              <Task
                tasks = {this.state.tasks}
                delete = {this.deleteTask}
                isDone = {this.isDone}
              />
            </ul>
        </div>
        <div className="sticky">
          <i className="large material-icons ">
            add_circle
          </i>
        </div>
      </div>
      ) 
    )}
}
