import React from 'react'


export class Tasks extends  React.Component {
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
  


  // addTask = (evt) => {
  //   if (evt.key === 'Enter') {
  //     fetch('api/tasks/', {
  //       method: 'POST',
  //       body: JSON.stringify({ description: evt.target.value }),
  //       headers: {
  //         'content-type': 'application/json'
  //       }
  //     })
  //       .then(() => {
  //         this.setState({
  //           inputValue: ''
  //         });
  //       })
  //       .then(() => { 
  //         this.getTodos()
  //       })
  //   }
  // }


  componentDidMount() {
    this.getTodos()
  }


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

    return (isLoading ? 
      '...Loading...' : (
        <div className="tasksWrap">
          {this.renderTasks(tasks)}
        </div>
      ) 
    )}
}
