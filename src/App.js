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
    console.log(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: `${inputValue.name} ${inputValue.surname} aka ${inputValue.nickname}`
    };
    setUsers([newUser, ...users]);
    console.log(inputValue);
  };

  const deleteUser = (name) => {
    const filteredUser = users.filter((user) => {
      return user.name !== name;
    });
    setUsers(filteredUser);
    // console.log(users[0].name);
  };

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
        {users.map(({ name }) => (
          <li onClick={() => deleteUser(name)}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
