import React from 'react';
import { Tasks } from './Tasks';
import { AddTaskComp} from './AddTaskComp';



export class App extends React.Component {
  render() {
    return (
      <div className="container"> 
        <Tasks />
        <AddTaskComp />
      </div>
    );
  }
}

