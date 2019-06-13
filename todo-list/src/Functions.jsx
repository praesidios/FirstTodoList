export class Functions {


  getTask = () => {
    const res = fetch('api/tasks/')
    .then(response => response.json())

    return res;
  }

  delete = (id) => {
    const del = fetch(`api/tasks/${id}`, {
      method: 'DELETE'
    })

    return del;
  }

  changeStatus = (evt, id) => {
    const change = fetch(`api/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ isDone: evt.target.checked }),
      headers: {
        'content-type': 'application/json'
      }
    })

    return change;
  }


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

}