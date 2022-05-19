import { useState } from "react";

const FuncMemoComp = () => {
  const [memo, setMemo] = useState([{ id: 1, text: "내용" }]);
  const [inputMemo, setInputMemo] = useState("");
  const [inputId, setInputId] = useState(2);

  const deleteMemo = (id) => {
    const nextMemo = memo.filter((m) => m.id !== id);
    setMemo(nextMemo);
  };

  const changeMemo = (e) => {
    setInputMemo(e.target.value);
  };

  const addMemo = () => {
    const nextMemo = memo.concat({
      id: inputId,
      text: inputMemo,
    });
    setMemo(nextMemo);
    setInputId(inputId + 1);
  };

  return (
    <div>
      <h1>메모(화살표함수형)</h1>
      <input type="text" name="inputText" onChange={changeMemo}></input>
      <button onClick={addMemo}>추가</button>
      <ul>
        {memo.map((m) => (
          <li key={m.id}>
            {m.text}
            <button
              onClick={() => {
                deleteMemo(m.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FuncMemoComp;
