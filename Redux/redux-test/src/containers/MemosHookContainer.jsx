import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Memos from "../components/Memos";
import { changeT, changeC, insert, remove } from "../modules/memos";

const MemosHookContainer = () => {
  const { memos, title, content } = useSelector((state) => ({
    memos: state.memos.memos,
    title: state.memos.title,
    content: state.memos.content,
  }));

  const dispatch = useDispatch();

  const onChangeT = useCallback(
    (title) => dispatch(changeT(title)),
    [dispatch]
  );
  const onChangeC = useCallback(
    (content) => dispatch(changeC(content)),
    [dispatch]
  );
  const onInsert = useCallback(
    (title, content) => dispatch(insert(title, content)),
    [dispatch]
  );
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return (
    <>
      <h1>메모하는 공간입니다 / hook</h1>
      <Memos
        memos={memos}
        title={title}
        content={content}
        onChangeT={onChangeT}
        onChangeC={onChangeC}
        onInsert={onInsert}
        onRemove={onRemove}
      />
    </>
  );
};
export default MemosHookContainer;
