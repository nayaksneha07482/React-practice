function TodoItem(props) {
  const { id, title, status } = props;

  return (
    <div key={id}>
      <p>
        {title}
        {"---"}
        {status ? "Completed" : "Not completed"}
      </p>
    </div>
  );
}

export default TodoItem;
