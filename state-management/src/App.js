import "./styles.css";
import React from "react";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";

export default function App() {
  const [todos, setTodos] = React.useState([]);

  const handleAdd = (text) => {
    const newTodo = {
      title: text,
      status: false,
      id: Math.random() + Date.now().toLocaleString() + text
    };
    setTodos([...todos, newTodo]);
  };

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
          />
        ))}
      </div>
    </div>
  );
}
