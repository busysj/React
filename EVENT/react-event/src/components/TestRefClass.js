// TestRefClass에서 ref 콜백과 React.createRef를 사용해서
// 클릭했을 때
// input의 style의 backgroundColor값을 red로 바꾸세요

import React, { Component } from "react";

class TestRefClass extends Component {
  constructor(props) {
    super(props);
    // ref 콜백 사용
    this.myInput = null;
    this.myInputRef = (element) => {
      this.myInput = element;
    };
    this.changeMyInput = () => {
      if (this.myInput) this.myInput.style.backgroundColor = "red";
    };

    // React.createRef 사용
    this.myRef = React.createRef();
    this.changebgc = () => {
      const bgc = this.myRef.current;
      if (bgc.style.backgroundColor === "red") {
        bgc.style.backgroundColor = "white";
      } else {
        bgc.style.backgroundColor = "red";
      }
    };
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.myInputRef}></input>
        <button onClick={this.changeMyInput}>change</button> <br />
        <input type="text" ref={this.myRef}></input>
        <button onClick={this.changebgc}>change</button>
      </div>
    );
  }
}

export default TestRefClass;
