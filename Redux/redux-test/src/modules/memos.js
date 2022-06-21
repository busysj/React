const CHANGE_TITLE = "memos/CHANGE_TITLE";
const CHANGE_CONTENT = "memos/CHANGE_CONTENT";
const INSERT = "memos/INSERT";
const REMOVE = "memos/REMOVE";

export const changeT = (title) => ({
  type: CHANGE_TITLE,
  title,
});
export const changeC = (content) => ({
  type: CHANGE_CONTENT,
  content,
});

let id = 2;
export const insert = (title, content) => ({
  type: INSERT,
  memo: {
    id: id++,
    title,
    content,
  },
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = {
  memos: [
    {
      id: 1,
      title: "첫번째",
      content: "첫번째 메모입니다",
    },
  ],
};

const memos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case CHANGE_CONTENT:
      return {
        ...state,
        content: action.content,
      };
    case INSERT:
      return {
        ...state,
        memos: state.memos.concat(action.memo),
      };
    case REMOVE:
      return {
        ...state,
        memos: state.memos.filter((memo) => memo.id !== action.id),
      };
    default:
      return state;
  }
};

export default memos;
