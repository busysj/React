import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [user, setUser] = useState("");

  const onChange = (e) => {
    setUser(e.target.value);
  };
  return (
    <div className="App">
      <h1>Home</h1>
      <p>당신의 이름은 무엇입니까?</p>
      <input
        type="text"
        onChange={onChange}
        style={{ border: "2px solid yellow" }}
      ></input>
      <p>반갑습니다 {user}님</p>
    </div>
  );
}

export default App;
