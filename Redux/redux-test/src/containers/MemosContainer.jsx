import React from "react";
import { connect } from "react-redux";
import Memos from "../components/Memos";
import { changeC, changeT, insert, remove } from "../modules/memos";

const MemosContainer = ({
  memos,
  title,
  content,
  changeT,
  changeC,
  insert,
  remove,
}) => {
  return (
    <>
      <h1>메모하는 공간입니다 / connect</h1>
      <Memos
        title={title}
        memos={memos}
        content={content}
        onChangeC={changeC}
        onChangeT={changeT}
        onInsert={insert}
        onRemove={remove}
      />
    </>
  );
};

export default connect(
  ({ memos }) => ({
    memos: memos.memos,
    title: memos.title,
    content: memos.content,
  }),
  {
    changeC,
    changeT,
    insert,
    remove,
  }
)(MemosContainer);
