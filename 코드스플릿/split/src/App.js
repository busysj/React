import "./App.css";
import ClassComp from "./components/ClassComp";
import FuncComp from "./components/FuncComp";
import LoadableComp from "./components/LoadableComp";

function App() {
  return (
    <div className="App">
      <ClassComp />
      <hr />
      <FuncComp />
      <hr />
      <LoadableComp />
    </div>
  );
}

export default App;
