import React from 'react';
import { TaskList  } from './TaskList ';

export class App extends React.Component {
  render() {
    return (
      <div className="container"> 
        <TaskList />
      </div>
    );
  }
}

