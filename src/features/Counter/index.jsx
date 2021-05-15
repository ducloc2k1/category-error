import React from "react";

// function usePersistentValue(initialValue) {
//   console.log(React.useState(initialValue)[0]);
// }

function Counter() {
  const [count, setCount] = React.useState(0);

  let id = React.useState({ current: 0 })[0];

  console.log(id);

  const clearInterval = () => {
    window.clearInterval(id.current);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    console.log(id);

    return clearInterval;
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={clearInterval}>Stop</button>
    </div>
  );
}

export default Counter;
