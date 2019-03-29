import React, { Component } from 'react';
import { List } from './List.jsx'


export class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    console.log('didmount')
    this.fetchTasks()
  }

  fetchTasks() {
    fetch('api/tasks')
      .then(response => response.json())
      .then(tasks => {
        this.setState({
          tasks,
          isLoading: false,
          inputValue: ''
        });
      });
  }

  componentDidUpdate() {
    console.log('update')
  }


  render() {
    console.log('render')
    return this.state.isLoading ?
      '..Loading' : (
        <div>
          <List
            tasks={this.state.tasks} />
        </div>

      )
  }
}
