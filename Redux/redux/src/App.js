import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import CounterHookContainer from "./containers/CounterHookContainer";
import TodosContainer from "./containers/TodosContainer";
import TodosHookContainer from "./containers/TodosHookContainer";
import NewsItemAsyncContainer from "./containers/NewsItemAsyncContainer";
import CounterAsyncContainer from "./containers/CounterAsyncContainer";

function App() {
  return (
    <div className="App">
      <NewsItemAsyncContainer />
      <hr />
      <CounterContainer />
      <CounterHookContainer />
      <CounterAsyncContainer />
      <hr></hr>
      <TodosContainer />
      <TodosHookContainer />
    </div>
  );
}

export default App;
