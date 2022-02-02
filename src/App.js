import { useReducer } from "react";

function App() {
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
      <div>Counter</div>
      <button onClick={() => dispatch({type: "ADD"})}>Increment</button>
      <button onClick={() => dispatch({type: "MINUS"})}>Decrement</button>
      {state.count}
    </section>
  );
}

export default App;
