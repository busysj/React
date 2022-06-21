import React from "react";

const MemoItem = ({ memo, onRemove }) => {
  return (
    <div>
      <span>제목 : {memo.title}</span>
      <button
        onClick={() => {
          onRemove(memo.id);
        }}
      >
        X
      </button>
      <br />
      <p>내용 : {memo.content}</p>
    </div>
  );
};

const Memos = ({
  title,
  memos,
  content,
  onChangeC,
  onChangeT,
  onInsert,
  onRemove,
}) => {
  const onChangeTitle = (e) => {
    onChangeT(e.target.value);
  };
  const onChangeContent = (e) => {
    onChangeC(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(title, content);
    onChangeT("");
    onChangeC("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={title} onChange={onChangeTitle} />
        <br />
        <textarea value={content} onChange={onChangeContent}></textarea>
        <br />
        <button type="submit">입력</button>
      </form>
      <hr />
      {memos.map((memo) => (
        <MemoItem key={memo.id} memo={memo} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Memos;
