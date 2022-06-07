import "./App.css";
import Layout from "./page/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import BoardList from "./page/BoardList";
import Board from "./page/Board";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/boardlist" element={<BoardList />}>
            <Route path=":id" element={<Board />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
