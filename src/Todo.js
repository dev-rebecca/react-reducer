import { useState } from "react";

const Todo = () => {
  const [item, setItem] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(item.target.value);
  }

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(item) => {setItem(item)}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Todo;
