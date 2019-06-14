import React from 'react';
import { CreateTaskBar } from './CreateTaskBar'


export class AddTaskComp extends React.Component {
  constructor(props){
    super(props)


    this.state = {
      value: ''
    }
  }

  
  renderCreateTaskBar = () => {
    return(
      <CreateTaskBar /> 
    )
  }


  render(){
    return(
      <div className="buttonWrap" >
        <i className="large material-icons" onClick={() => this.renderCreateTaskBar()}>
          add_circle
        </i>
      </div>
    )
  }
}