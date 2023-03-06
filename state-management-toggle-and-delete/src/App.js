import "./styles.css";
import React from "react";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";

// .......................function...............................
export default function App() {
  const [todos, setTodos] = React.useState([]);
// -----------------
  const handleAdd = (text) => {
    const newTodo = {
      title: text,
      status: false,
      id: Math.random() + Date.now().toLocaleString() + text
    };
    setTodos([...todos, newTodo]);
  };
  // ---------toggle-------
  const handleToggle =(id)=>{
    const afterUpdation = todos.map((todo) => {
      eturn todo.id === id ? {...todos, status: !todo.status} : todo ;
    });
    setTodos(afterUpdation);
  }
  // ---------delete------------
  const handleDelete = (id)=>{
const afterDeletion = todos.filter((todo) => todo.id !== id);

setTodos(afterDeletion);
  }
// .............................return............................
  return (
    <div className="App">
      <AddTodo handleAdd={handleAdd} />

      <div>
        {todos.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            title={todoItem.title}
            status={todoItem.status}
            id={todoItem.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
  // ......................................................
}
