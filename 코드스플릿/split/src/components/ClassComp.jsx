// 1. 16.8버전 이전에 클래스형 컴포넌트에서 코드 스플릿 방법

import React, { Component } from "react";

class ClassComp extends Component {
  // comp를 담아올 state를 만든다
  state = {
    SplitComp: null,
  };
  handleClick = () => {
    // import를 통해서 comp를 받아오고
    // comp는 promise로 들고오기 때문에 then으로 처리한다.
    import("./SplitComp").then(({ default: SplitComp }) => {
      this.setState({ SplitComp });
    });
  };
  render() {
    const { SplitComp } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>버튼을 누르세요</button>
        {/** SplitComp 값이 들어가 있다면 값 출력 */}
        {SplitComp && <SplitComp />}
      </div>
    );
  }
}

export default ClassComp;
