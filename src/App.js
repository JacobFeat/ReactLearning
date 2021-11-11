import React, { useState, useEffect } from "react";
import "./styles.css";

const initialState = 0;

export default function App() {
  const [count, setCount] = useState(initialState);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className="App">
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(initialState)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <form onClick={handleSubmit}>
        <label htmlFor="test">
          Test:
          <input id="test" type="text" onChange={handleInput} />
        </label>
        <input type="submit" value="Check" />
      </form>
    </div>
  );
}
