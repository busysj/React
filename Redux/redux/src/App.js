import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import CounterHookContainer from "./containers/CounterHookContainer";
import TodosContainer from "./containers/TodosContainer";
import TodosHookContainer from "./containers/TodosHookContainer";
import NewsItemAsyncContainer from "./containers/NewsItemAsyncContainer";
import CounterAsyncContainer from "./containers/CounterAsyncContainer";
import CounterSagaContainer from "./containers/CounterSagaContainer";
import NewsItemSagaContainer from "./containers/NewsItemSagaContainer";

function App() {
  return (
    <div className="App">
      <NewsItemSagaContainer />
      <hr />
      <NewsItemAsyncContainer />
      <hr />
      <CounterContainer />
      <CounterHookContainer />
      <CounterAsyncContainer />
      <CounterSagaContainer />
      <hr></hr>
      <TodosContainer />
      <TodosHookContainer />
    </div>
  );
}

export default App;
