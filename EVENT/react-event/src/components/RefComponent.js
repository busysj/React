// testRefClass 컴포넌트를 들고 와서 현재 컴포넌트에서 제어

import React, { Component } from "react";
import TestRefClass from "./TestRefClass";

class RefComponent extends Component {
  constructor(props) {
    super(props);
    this.componentRef = null;
    this.changeAll = () => {
      this.componentRef.changebgc();
      this.componentRef.changeMyInput();
    };
  }
  render() {
    return (
      <div>
        <TestRefClass
          ref={(element) => {
            this.componentRef = element;
          }}
          // ref를 사용해서 엘리먼트 확인
        />
        <button onClick={this.changeAll}>모두 바꾸기</button>
      </div>
    );
  }
}

export default RefComponent;
