import React from 'react';
import './App.css';
import { TaskList  } from './TaskList '

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <TaskList />
      </div>
    );
  }
}

