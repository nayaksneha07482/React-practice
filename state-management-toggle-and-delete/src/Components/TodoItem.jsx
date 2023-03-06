function TodoItem(props) {
  const { id, title, status, handleDelete, handleToggle } = props;
// ................return..............
  return (
    <div key={id}>
      <p>
        {title}
        {"---"}
        {status ? "Completed" : "Not completed"}
      </p>
      <button onClick={()=>handleToggle(id)}>TOGGLE</button>
      <button onClick={()=>handleDelete(id)}>DELETE</button>
    </div>
  );
// ............................
}

export default TodoItem;
