import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <h1>Count : {count}</h1>

      <button disabled={count >= 10} onClick={() => setCount(count + 1)}>
        ADD
      </button>

      <button disabled={count <= 0} onClick={() => setCount(count - 1)}>
        REDUCE
      </button>
      <button onClick={() => setCount(0)}>RESET</button>
    </div>
  );
}

export default Counter;
