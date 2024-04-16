
function Counter() {
  let count = 7;
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => { count++; }}>
        Up
      </button>
      <button
        onClick={() => { count--; }}>
        Down
      </button>
    </div>
  );
}
export default Counter;
