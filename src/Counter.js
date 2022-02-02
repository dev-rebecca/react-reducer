import { useReducer } from "react";

function Counter() {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {count: state.count + 1}
        break;
      case "MINUS":
        return {count: state.count - 1}
        break;
      default:
        return state.count;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <h1>Counter</h1>
      <button onClick={() => dispatch({type: "ADD"})}>Increment</button>
      <button onClick={() => dispatch({type: "MINUS"})}>Decrement</button>
      {state.count}
    </section>
  );
}

export default Counter;
