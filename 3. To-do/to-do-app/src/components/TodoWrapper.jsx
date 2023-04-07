import React from 'react'
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = () => {
    setTodos([...todos, {id:uuidv4(), task:todos, completed:false, isEditing:false}])
  }

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo}/>
      {/* display todos */}
      {todos.map((todo,index) => (todo.isEditing ? (<EditTodoForm editTodo={editTask} task={todo}/>) : (<Todo key={index} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} />)
      ))}
    </div>
  )
}

