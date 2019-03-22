import React, { Component } from 'react';

export class TaskList extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: null, 
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchTasks()
  }

  fetchTasks(){
    fetch('api/tasks')
      .then(response => response.json())
      .then(tasks => {
        this.setState({
          tasks,
          isLoading: false
        });
      });
  }

  componentDidUpdate(){
    this.fetchTasks()
  }


  handleChangeDes() {
    fetch('api/tasks/' + this.state.tasks.id, {
      method: 'PUT',
      body: JSON.stringify({description: "say hello"}),
      headers: {
        'content-type': 'application/json'
      }
    })
  } 

  onChange = (evt) => {
    this.setState({ tasks: evt.target.value});
  }

  render(){
    return this.state.isLoading ? 
      '..Loading' : (
        <div className = "taskList">
          {this.state.tasks.map(task => (
            <input 
              value = {task.description}
              className = "task"
              key = {task.id}
              onChange={this.onChange}
            />
          ))}
        </div>
    )
  }
}
