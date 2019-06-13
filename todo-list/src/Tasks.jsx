import React from 'react';
import { Functions} from './Functions';
import spinner from'./spinner.gif';



export class Tasks extends  React.Component {
  constructor(props) {
    super(props)
    

    this.state = {
      tasks: [],
      isLoading: true
    }
  }

  Functions = new Functions()

  componentDidMount() {
    this.updateTaskList()
  }


  updateTaskList() {
    this.Functions.getTask()
      .then(tasks => this.setState({  
        tasks,
        isLoading: false,
      }));
  }

  deleteTask = (id) => {
    this.Functions.delete(id)
    .then(() => { 
      this.updateTaskList()
    });
  };


  isDone = (evt, id) => {
    this.Functions.changeStatus(evt, id)
      .then(() => { 
        this.updateTaskList()
      })
  };
  

  renderTasks = (arr) => {
    return (
      arr.map((task) => {
        const { id, description, isDone}  = task;

        return (
          <div
            className="task"
            key={id}>

              <input 
                className="taskCheckbox"
                id = {id}
                type="checkbox" 
                checked = {isDone} 
                onChange={(evt) => this.isDone(evt, id)}
              />
              <label className="description" htmlFor={id}>
                  {description}
              </label>
              <i 
                className="small material-icons deleteButton"
                onClick={() => this.deleteTask(task.id)} >
                delete_forever
              </i>

          </div>
        );
      })
    );
  }



  render() {
    const { tasks, isLoading } = this.state;

    if(isLoading){
      return(
        <div className="spinner">
          <img src={spinner} alt="spinner"/>
        </div>
      )
    }
    return (
      <div className="tasksWrap">
        {this.renderTasks(tasks)}
      </div>
    )}
}
