import React, { Component } from "react";

class ListClass extends Component {
  constructor(props) {
    super(props);
    // 값을 배열로 받아옴
    this.numbers = ["봄", "여름", "가을", "겨울"];
    // map을 통해서 동일한 컴포넌트 또는 엘리먼트에 넣어서 새로운 배열로 저장
    this.listItems = this.numbers.map((number, index) => (
      <li key={index}>{number}</li>
    ));
    this.state = {
      // 배열값을 사용해줄 때는 키 값을 위한 id 값을 추가
      season: [
        { id: 1, text: "봄" },
        { id: 2, text: "여름" },
        { id: 3, text: "가을" },
        { id: 4, text: "겨울" },
      ],
      // 값을 받아 올 id와 text
      inputId: 5,
      inputText: "",

      // 아래 학생을 table 태그로 출력하세요
      students: [
        { id: 1, name: "홍길동" },
        { id: 2, name: "성춘향" },
        { id: 3, name: "John" },
      ],
    };
  }
  //바뀐 값을 가져오는 함수
  changeText = (e) =>
    this.setState({
      inputText: {
        [e.target.name]: e.target.value,
      },
    });

  // 배열에 값을 넣는 함수
  getText = () => {
    // this.state.season.push(this.state.inputText);
    const nextSeason = this.state.season.concat({
      id: this.state.inputId,
      text: this.state.inputText,
    });
    this.setState({ inputId: this.state.inputId + 1 });
    this.setState({ season: nextSeason });
  };

  render() {
    const { season, students } = this.state;
    const listSeason = season.map((s) => <li key={s.id}>{s.text}</li>);
    return (
      <div>
        <input type="text" name="inputText" onChange={this.changeText}></input>
        <button onClick={this.getText}>추가</button>
        <ul>{listSeason}</ul>
        <ol>
          {season.map((s) => (
            <li key={s.id}>{s.text}</li>
          ))}
        </ol>
        <table>
          <tr>
            <td>id</td>
            <td>이름</td>
          </tr>
          {students.map((student) => (
            // 여러줄로 작성할 때 () 묶어서 return으로 보냄
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default ListClass;
