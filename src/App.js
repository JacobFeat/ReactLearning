import React, { useState, useEffect } from "react";
import "./styles.css";
import { Wrapper } from "./components/atoms/Wrapper/Wrapper";
import { students } from "./data/students";

const initialState = 0;
const initialForm = {
  name: "",
  surname: "",
  nickname: ""
};

export default function App() {
  const [count, setCount] = useState(initialState);
  const [inputValue, setInputValue] = useState(initialForm);
  const [users, setUsers] = useState(students);

  useEffect(() => {
    document.title = count;
  });

  const handleInput = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: `${inputValue.name} "${inputValue.nickname}" ${inputValue.surname} `
    };
    setUsers([newUser, ...users]);
  };

  const deleteUser = (id) => {
    const filteredUser = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(filteredUser);
  };
  // I'll back
  return (
    <div className="App">
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(initialState)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <Wrapper as="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={inputValue.name}
          onChange={handleInput}
        />
        <label htmlFor="surname">Surname:</label>
        <input
          id="surname"
          type="text"
          name="surname"
          value={inputValue.surname}
          onChange={handleInput}
        />
        <label htmlFor="nickname">Nickname:</label>
        <input
          id="nickname"
          type="text"
          name="nickname"
          value={inputValue.nickname}
          onChange={handleInput}
        />
        <input type="submit" value="Check" />
      </Wrapper>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id.toString()} onClick={() => deleteUser(id)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
