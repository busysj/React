import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Test from "./page/Test";
import Profile from "./page/Profile";
import BoardList from "./page/BoardList";
import Board from "./page/Board";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 컴포넌트와 주소 연결 */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* 임의의 컴포넌트 하나를 추가해보세요 */}
        <Route path="/test" element={<Test />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
        {/* 중첩하여 라우터를 사용할 수 있다 - outlet 컴포넌트 필요 */}
        <Route path="/boardlist" element={<BoardList />}>
          <Route path=":id" element={<Board />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
