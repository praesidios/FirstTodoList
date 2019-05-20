import React from 'react'


export const AddTaskInput = (props) => {

    return (
        <input
          className="addTaskInput"
          type="text"
          value={props.value}
          onChange={props.handleChange}
          placeholder="Add task"
          onKeyPress={props.addTask} />
    )
}