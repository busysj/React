import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import ArrowComponent from "./components/ArrowComponent";
import TrComponent from "./components/TrComponent";
import TrComponent2 from "./components/TrComponent2";
import StateComponent from "./components/StateComponent";

// 함수형 컴포넌트
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>내용을 수정하였습니다</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
        <ArrowComponent name="3">태그 사이로 전달되는 props</ArrowComponent>
        <TrComponent login={true} name="성춘향" />
        <TrComponent2
          login="true" // 이 때 들어가는 값은 문자열
          // 다른 자료형을 사용하려면 {} 을 이용하여 자바스크립트로 넣어준다
          // props 속성의 이름을 통해서 props값을 전달할 수 있다
        />
        <StateComponent />
      </header>
    </div>
  );
}

export default App;
