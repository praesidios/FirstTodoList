import React from 'react';


export class CreateTaskBar extends React.Component {


  render(){
    return(
      <div className="createBar">
        <h3>Add new task</h3>
        <i class="small material-icons">close</i>
        <input type="text"/>
        <button>
          CANCEL
        </button>
        <button>
          OK
        </button>
      </div>
    )
  }
}