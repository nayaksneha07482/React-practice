import React, { useState } from 'react'

export default function TodoForm({addTodo}) {
  const [value, setValue] = useState("");
  const handlechange=(e)=>{
    setValue(e.target.value)
  }
  const handlesubmit = (e) =>{
    e.prventDefault();
    addTodo(value);
    setValue("");
  } 
  return (
    <form onSubmit={handlesubmit} className="TodoForm">
      <input type="text" className="todo-input" placeholder='What is the task today?' onChange={handlechange}/>
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
}

