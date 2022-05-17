import React, { Component } from "react";

class TrComponent extends Component {
  render() {
    // 클래스에서 props값을 가져올 때는 this.props를 통해서 들고온다
    const { login, name } = this.props;
    return login ? (
      <div>
        <h1>로그인에 성공하였습니다</h1>
        <h3>{name} 입니다</h3>
      </div>
    ) : (
      <div>
        <h1>로그인이 필요합니다</h1>
        <p>리액트를 시작하였습니다</p>
      </div>
    );
  }
}

TrComponent.defaultProps = {
  name: "홍길동",
};

export default TrComponent;
