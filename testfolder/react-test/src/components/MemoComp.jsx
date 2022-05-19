import React, { Component } from "react";

class MemoComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memo: [{ id: 1, text: "내용" }],
      inputId: 2,
      inputText: "",
    };
  }

  changeMemo = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  deleteMemo = (id) => {
    const nextMemo = this.state.memo.filter((m) => m.id !== id);
    this.setState({ memo: nextMemo });
  };

  addMemo = () => {
    const nextMemo = this.state.memo.concat({
      id: this.state.inputId,
      text: this.state.inputText,
    });
    this.setState({ inputId: this.state.inputId + 1 });
    this.setState({ memo: nextMemo });
  };

  render() {
    const { memo } = this.state;
    return (
      <div>
        <h1>메모(클래스형)</h1>
        <input type="text" name="inputText" onChange={this.changeMemo}></input>
        <button onClick={this.addMemo}>추가</button>
        <ul>
          {memo.map((m) => (
            <li key={m.id}>
              {m.text}
              <button
                onClick={() => {
                  this.deleteMemo(m.id);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MemoComp;
